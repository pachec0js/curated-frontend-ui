#!/usr/bin/env bash
#
# Curated Frontend UI - Instalador Multi-Agente
# Versão: 1.0.1
# Suporta: Antigravity/Gemini CLI, Claude Code, Cursor, Windsurf, GitHub Copilot, Codex CLI
#

set -e

VERSION="1.0.1"
SKILL_NAME="curated-frontend-ui"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

MODE="link"          # "link" ou "copy"
SCOPE="project"      # "project", "global" ou "all"
DRY_RUN=false
FORCE=false
ACTION="install"     # "install", "uninstall", "status"

# Ajuda / Uso
show_help() {
  cat << USAGE
Curated Frontend UI - Instalador Multi-Agente (v${VERSION})

Uso: ./install.sh [opções]

Opções:
  --link            Instalação via symlink (padrão recomendado; atualizações propagam automaticamente)
  --copy            Instalação via cópia física de arquivos (para congelar versão)
  --project         Instala no projeto atual (padrão)
  --global          Instala globalmente para o usuário (~/.gemini, ~/.claude, ~/.cursor, etc.)
  --all             Instala tanto no projeto atual quanto globalmente
  --dry-run         Simula as operações no terminal sem alterar nenhum arquivo
  --status          Audita os diretórios de agentes e exibe onde a skill está instalada
  --uninstall       Remove com segurança os links ou arquivos instalados por esta skill
  --force           Sobrescreve alvos existentes gerando backup com sufixo .bak
  --version         Exibe a versão do instalador
  -h, --help        Exibe esta mensagem de ajuda
USAGE
}

# Parsing de argumentos
while [[ $# -gt 0 ]]; do
  case "$1" in
    --link) MODE="link"; shift ;;
    --copy) MODE="copy"; shift ;;
    --project) SCOPE="project"; shift ;;
    --global) SCOPE="global"; shift ;;
    --all) SCOPE="all"; shift ;;
    --dry-run) DRY_RUN=true; shift ;;
    --status) ACTION="status"; shift ;;
    --uninstall) ACTION="uninstall"; shift ;;
    --force) FORCE=true; shift ;;
    --version) echo "Curated Frontend UI Installer v${VERSION}"; exit 0 ;;
    -h|--help) show_help; exit 0 ;;
    *) echo "Opção desconhecida: $1"; show_help; exit 1 ;;
  esac
done

# Cores para terminal
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[OK]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[AVISO]${NC} $1"; }
log_error() { echo -e "${RED}[ERRO]${NC} $1"; }

# Lista de destinos
declare -A GLOBAL_TARGETS=(
  ["Gemini / Antigravity"]="$HOME/.gemini/config/skills/${SKILL_NAME}"
  ["Claude Code"]="$HOME/.claude/skills/${SKILL_NAME}"
  ["Cursor Skills"]="$HOME/.cursor/skills/${SKILL_NAME}"
  ["Codex CLI"]="$HOME/.codex/skills/${SKILL_NAME}"
)

PROJECT_ROOT="$(pwd)"
declare -A PROJECT_TARGETS=(
  ["Antigravity / Gemini"]="${PROJECT_ROOT}/.agents/skills/${SKILL_NAME}"
  ["Claude Code"]="${PROJECT_ROOT}/.claude/skills/${SKILL_NAME}"
  ["Cursor Skills"]="${PROJECT_ROOT}/.cursor/skills/${SKILL_NAME}"
)

# Status
if [[ "$ACTION" == "status" ]]; then
  echo "=== Auditoria da Skill Curated Frontend UI (v${VERSION}) ==="
  echo ""
  echo "Escopo Global:"
  for agent in "${!GLOBAL_TARGETS[@]}"; do
    target="${GLOBAL_TARGETS[$agent]}"
    if [[ -L "$target" ]]; then
      echo -e "  $agent: ${GREEN}Instalado (Symlink -> $(readlink "$target"))${NC}"
    elif [[ -d "$target" ]]; then
      echo -e "  $agent: ${GREEN}Instalado (Cópia Direta)${NC}"
    else
      echo -e "  $agent: ${YELLOW}Não instalado${NC} ($target)"
    fi
  done

  echo ""
  echo "Escopo do Projeto Atual (${PROJECT_ROOT}):"
  for agent in "${!PROJECT_TARGETS[@]}"; do
    target="${PROJECT_TARGETS[$agent]}"
    if [[ -L "$target" ]]; then
      echo -e "  $agent: ${GREEN}Instalado (Symlink -> $(readlink "$target"))${NC}"
    elif [[ -d "$target" ]]; then
      echo -e "  $agent: ${GREEN}Instalado (Cópia Direta)${NC}"
    else
      echo -e "  $agent: ${YELLOW}Não instalado${NC} ($target)"
    fi
  done
  exit 0
fi

# Ação de Desinstalação
if [[ "$ACTION" == "uninstall" ]]; then
  echo "=== Removendo Skill ${SKILL_NAME} ==="
  targets_to_check=()
  if [[ "$SCOPE" == "global" || "$SCOPE" == "all" ]]; then
    for t in "${GLOBAL_TARGETS[@]}"; do targets_to_check+=("$t"); done
  fi
  if [[ "$SCOPE" == "project" || "$SCOPE" == "all" ]]; then
    for t in "${PROJECT_TARGETS[@]}"; do targets_to_check+=("$t"); done
  fi

  for target in "${targets_to_check[@]}"; do
    if [[ -e "$target" || -L "$target" ]]; then
      if [[ "$DRY_RUN" == true ]]; then
        log_info "[DRY-RUN] Removeria: $target"
      else
        rm -rf "$target"
        log_success "Removido: $target"
      fi
    fi
  done
  exit 0
fi

# Instalação
install_to_target() {
  local agent_name="$1"
  local target_path="$2"

  if [[ "$SCRIPT_DIR" == "$target_path" ]]; then
    log_info "$agent_name: Origem é o próprio diretório de trabalho. Pulando."
    return
  fi

  local parent_dir="$(dirname "$target_path")"

  if [[ "$DRY_RUN" == true ]]; then
    log_info "[DRY-RUN] Criaria diretório pai: $parent_dir"
    if [[ "$MODE" == "link" ]]; then
      log_info "[DRY-RUN] Criaria symlink: $target_path -> $SCRIPT_DIR"
    else
      log_info "[DRY-RUN] Copiaria arquivos para: $target_path"
    fi
    return
  fi

  mkdir -p "$parent_dir"

  if [[ -e "$target_path" || -L "$target_path" ]]; then
    if [[ "$FORCE" == true ]]; then
      log_warn "Destino já existe ($target_path). Criando backup com .bak"
      mv "$target_path" "${target_path}.bak.$(date +%s)"
    else
      if [[ -L "$target_path" && "$(readlink "$target_path")" == "$SCRIPT_DIR" ]]; then
        log_info "$agent_name: Symlink já aponta corretamente para a origem. Tudo certo."
        return
      fi
      log_warn "$target_path já existe. Use --force para substituir com backup."
      return
    fi
  fi

  if [[ "$MODE" == "link" ]]; then
    ln -s "$SCRIPT_DIR" "$target_path"
    log_success "$agent_name: Symlink instalado em $target_path"
  else
    cp -r "$SCRIPT_DIR" "$target_path"
    log_success "$agent_name: Cópia instalada em $target_path"
  fi
}

echo "=== Instalando Curated Frontend UI (v${VERSION}) ==="
log_info "Modo: $MODE | Escopo: $SCOPE | Dry-run: $DRY_RUN"

if [[ "$SCOPE" == "global" || "$SCOPE" == "all" ]]; then
  log_info "Instalando alvos globais..."
  for agent in "${!GLOBAL_TARGETS[@]}"; do
    install_to_target "$agent" "${GLOBAL_TARGETS[$agent]}"
  done
fi

if [[ "$SCOPE" == "project" || "$SCOPE" == "all" ]]; then
  log_info "Instalando alvos de projeto..."
  for agent in "${!PROJECT_TARGETS[@]}"; do
    install_to_target "$agent" "${PROJECT_TARGETS[$agent]}"
  done

  # Regras específicas para Cursor .mdc e Copilot
  if [[ "$DRY_RUN" == false ]]; then
    mkdir -p "${PROJECT_ROOT}/.cursor/rules"
    cp "${SCRIPT_DIR}/adapters/cursor/curated-frontend-ui.mdc" "${PROJECT_ROOT}/.cursor/rules/" 2>/dev/null || true
    log_success "Regra Cursor (.cursor/rules/curated-frontend-ui.mdc) atualizada."
  fi
fi

echo ""
log_success "Instalação concluída com sucesso!"
