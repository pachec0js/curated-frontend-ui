# Curated Front-End UI 🎨✨

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](./CHANGELOG.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](./LICENSE)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3_%7C_v4-38bdf8.svg)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-18_%7C_19-61dafb.svg)](https://react.dev/)
[![Multi-Agent](https://img.shields.io/badge/Multi--Agent-Claude_%7C_Cursor_%7C_Gemini_%7C_Copilot-purple.svg)](#-compatibilidade-multi-agente)

> **Transforme qualquer agente de IA (Claude Code, Cursor, Gemini CLI, Copilot, Windsurf) em um especialista sênior de front-end.**  
> Elimine interfaces genéricas de IA com uma curadoria de design baseada no ecossistema Tailwind CSS: **shadcn/ui**, **Flowbite**, **Magic UI** e **Aceternity UI**.

---

## ⚡ Por Que o Curated Front-End UI?

Sem uma curadoria estrita, a maioria dos modelos de IA gera interfaces com os mesmos vícios:
- ❌ **Gradientes roxo-azulados repetitivos** sobre fundos brancos sem contraste.
- ❌ **Conflito de motores de CSS** (misturar DaisyUI com shadcn ou Panda CSS com Tailwind).
- ❌ **Sobrecarga de JavaScript** desnecessária para páginas que só precisavam de HTML semântico e LCP rápido.
- ❌ **Falta de acessibilidade** (modais que não prendem foco, botões sem rótulos, falta de suporte a teclado).

O **Curated Front-End UI** resolve isso fornecendo ao agente:
1. **Regras Claras de Desempate**: `shadcn/ui` para primitivos interativos com estado; `Flowbite` apenas para seções macro estáticas de marketing; `Magic UI` e `Aceternity UI` sob demanda no perfil visual.
2. **Animação Progressiva**: Nível 1 (CSS/Tailwind) ➔ Nível 2 (`motion/react`) ➔ Nível 3 (Showstoppers). Respeito estrito a `prefers-reduced-motion`.
3. **Direção Visual Prévia**: O agente define paleta, escala tipográfica e contraste funcional antes de escrever código.
4. **Snippets Locais**: Funciona offline e com velocidade máxima, sem depender de web scraping frágil.

---

## 🚀 Instalação Rápida (One-Liner)

Clone o repositório e rode o instalador interativo:

```bash
git clone https://github.com/pachec0js/curated-frontend-ui.git
cd curated-frontend-ui

# Instalar globalmente para todos os agentes detectados na sua máquina
./install.sh --global

# OU instalar apenas dentro do seu projeto atual
./install.sh --project
```

### Opções do Instalador (`./install.sh`)

| Opção | Descrição |
| :--- | :--- |
| `--link` | *(Padrão)* Cria links simbólicos. Atualizações no repositório propagam automaticamente para todos os agentes. |
| `--copy` | Instalação por cópia física (útil para congelar a versão num projeto ou em pipelines CI/CD). |
| `--global` | Instala nas pastas de configuração de usuário (`~/.gemini`, `~/.claude`, `~/.cursor`, etc.). |
| `--project` | Instala na raiz do projeto onde o comando for executado (`.agents/`, `.claude/`, `.cursor/`). |
| `--status` | Audita seu sistema e exibe exatamente onde a skill está instalada e links ativos. |
| `--dry-run` | Simula todas as ações no terminal sem alterar nenhum arquivo. |
| `--uninstall` | Remove com segurança apenas os links ou arquivos instalados por esta skill. |
| `--force` | Autoriza sobrescrita criando backup automático (`.bak`) de arquivos pré-existentes. |

---

## 🤖 Compatibilidade Multi-Agente

Esta skill segue o padrão aberto **Agent Skills Standard (`SKILL.md`)** e inclui adaptadores nativos para as principais ferramentas de IA do mercado:

| Ferramenta / Agente | Escopo Global | Escopo de Projeto | Adaptador Dedicado |
| :--- | :--- | :--- | :--- |
| **Claude Code** | `~/.claude/skills/` | `.claude/skills/` | `SKILL.md` nativo |
| **Cursor** | `~/.cursor/skills/` | `.cursor/skills/` | `.cursor/rules/curated-frontend-ui.mdc` |
| **Gemini CLI / Google Antigravity** | `~/.gemini/config/skills/` | `.agents/skills/` | `SKILL.md` nativo |
| **GitHub Copilot** | — | `.github/skills/` | `.github/copilot-instructions.md` |
| **Windsurf (Cascade)** | `~/.codeium/windsurf/skills/` | `.windsurf/rules/` | `.windsurf/rules/curated-frontend-ui.md` |
| **Codex CLI** | `~/.codex/skills/` | `.codex/skills/` | `SKILL.md` nativo |

---

## 🏛️ O Core Stack Curado

Toda a arquitetura é construída sobre um ecossistema 100% harmonioso e sem conflitos de CSS:

```
+-------------------------------------------------------------------------+
|                              ACETERNITY UI                              |
|       Hero Cinematográfico (Aurora/Spotlight), 3D Cards, Bento Grids    |
+-------------------------------------------------------------------------+
|                                MAGIC UI                                 |
|     Microinterações, Border Beams, Textos Animados, Particles, Docks    |
+-------------------------------------------------------------------------+
|                            FLOWBITE (BLOCKS)                            |
|    EXCLUSIVAMENTE Estruturas Macro Estáticas (Pricing, Footers, FAQs)   |
+-------------------------------------------------------------------------+
|                            SHADCN/UI (CORE)                             |
|      MANDATÓRIO para QUALQUER Primitivo com Estado (Modais, Forms, etc) |
+-------------------------------------------------------------------------+
|                      TAILWIND CSS (v3 ou v4) + REACT                    |
+-------------------------------------------------------------------------+
```

### ⚖️ A Regra de Desempate:
- **Tem estado ou interatividade?** ➔ **`shadcn/ui`** (`Dialog`, `Dropdown`, `Form`, `Select`, `Accordion`, `Sheet`). *(Proibido usar o JavaScript ou modais do Flowbite)*.
- **É seção macro de layout?** ➔ **`Flowbite Blocks`** (`Pricing Table Layout`, `Footers`, `Testimonials Grid`).
- **É microinteração visual?** ➔ **`Magic UI`** (`BorderBeam`, `ShimmerButton`, `NumberTicker`).
- **É destaque visual / 3D?** ➔ **`Aceternity UI`** (`AuroraBackground`, `Spotlight`, `3D Pin`).

---

## 🎯 Perfis de Execução

Você pode direcionar o agente a trabalhar sob três filosofias distintas:

1. **`Performance First`** *(Padrão para landing pages comerciais e negócios locais)*:
   - Foco em velocidade instantânea, CSS nativo do Tailwind, imagens em WebP/AVIF com `priority` no Hero, LCP < 1.5s e conversão objetiva (WhatsApp, Leads).
2. **`Visual Experience`** *(Para produtos inovadores, tech launches e portfólios)*:
   - Uso planejado de Motion, Bento Grids e efeitos do Magic UI e Aceternity UI, com orçamento de performance monitorado.
3. **`Application UI`** *(Para dashboards, SaaS B2B e sistemas internos)*:
   - shadcn/ui intensivo, formulários com Zod + React Hook Form, tabelas com filtros e estados vazios acessíveis.

---

## 💡 Como Usar: O Prompt Perfeito

Depois de instalar a skill, basta pedir para o seu agente favorito criar sua interface. Para obter o melhor resultado, inclua os **5 pilares de contexto**:

```markdown
Atue com a skill curated-frontend-ui no perfil Performance First.
Quero construir uma landing page completa para a clínica médica 'Clínica Dermatológica Dra. Camila'.

1. Objetivo: Conversão direta para agendamento de consulta via WhatsApp.
2. Direção Visual: Minimalismo acolhedor ('Warm Minimalist').
   - Paleta: Fundo linho (#FAF7F2), texto verde floresta escuro (#242D28) e botão de ação verde esmeralda (#1E7E55).
   - Tipografia: Títulos elegantes em serif e corpo em sans-serif legível.
3. Seções:
   - Navbar com branding e botão CTA.
   - Hero Section com foto de autoridade médica, headline empática e botões de ação.
   - Grid de Tratamentos em Destaque.
   - Prova Social com depoimentos de pacientes.
   - FAQ Accordion acessível (use shadcn/ui).
   - Footer completo com horários e endereço.
4. Requisitos: Responsividade cirúrgica (320px a 1440px) e sem quebras de layout.
```

---

## 📁 Estrutura do Repositório

```text
curated-frontend-ui/
├── SKILL.md                          # Instruções universais canônicas (v1.0.0)
├── install.sh                        # Instalador seguro multi-agente (Bash)
├── adapters/                         # Adaptadores nativos de regras
│   ├── cursor/                       # curated-frontend-ui.mdc
│   ├── copilot/                      # copilot-instructions.md
│   └── windsurf/                     # curated-frontend-ui.md
├── references/                       # Guias e catálogos locais (Progressive Disclosure)
│   ├── design-direction.md          # Metodologia de briefing visual e paletas
│   ├── core-stack.md                 # Detecção de Tailwind v3 vs v4 e dependências
│   ├── component-selection.md        # Matriz de desempate categórica
│   ├── animation-policy.md           # Política de animação progressiva em 3 níveis
│   ├── quality-gates.md              # Checklist de homologação de produção
│   ├── accessibility.md              # Regras de a11y (WCAG, teclado, ARIA)
│   ├── performance.md                # Web Vitals (LCP, CLS, imagens)
│   ├── escape-hatch.md               # Cláusula de escape (Recharts, Leaflet, TipTap)
│   └── alternative-profiles.md       # Perfis isolados para DaisyUI e Park UI
├── recipes/                          # Receitas completas e testáveis
│   ├── local-business-landing.tsx    # Landing page comercial (Performance First)
│   └── saas-landing.tsx              # Landing page tech moderna (Visual Experience)
├── CHANGELOG.md                      # Histórico de releases
└── README.md                         # Esta documentação
```

---

## 🛡️ Cláusula de Escape Pragmática

A skill prioriza as 4 bibliotecas homologadas, mas possui uma **cláusula de escape oficial** para demandas avançadas não cobertas:
- **Gráficos & Dashboards**: `Recharts` ou `Tremor`.
- **Mapas Interativos**: `Leaflet` (`react-leaflet`) ou `Mapbox GL`.
- **Editores Rich Text**: `TipTap`.

*Regra:* O componente externo pode ser utilizado, mas seus containers, botões e controles devem **obrigatoriamente adotar as classes e tokens Tailwind do projeto**, garantindo consistência visual.

---

## 🤝 Como Contribuir

Contribuições são muito bem-vindas!
1. Faça um Fork do projeto.
2. Crie uma branch para sua funcionalidade (`git checkout -b feature/nova-receita`).
3. Adicione testes ou novas receitas em `recipes/`.
4. Envie seu Pull Request.

---

## 📄 Licença

Distribuído sob a licença **MIT**. Consulte [`LICENSE`](./LICENSE) para mais informações.
