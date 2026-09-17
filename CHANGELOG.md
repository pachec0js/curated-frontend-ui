# Changelog - Curated Frontend UI Skill

## [1.0.0] - 2026-09-17
### Lançamento Inicial
- Arquitetura multi-agente inspirada no padrão Impeccable com adaptadores para Claude Code, Cursor, Gemini CLI / Antigravity, Windsurf, Copilot e Codex.
- Core Stack homogêneo baseado em Tailwind CSS (v3 e v4), React, Lucide Icons e Motion.
- Regra mandatória de desempate: shadcn/ui para primitivos com estado vs Flowbite para blocos estáticos de marketing.
- Política de animação progressiva em 3 níveis respeitando `prefers-reduced-motion` e prevenção de layout shifts.
- Camada de briefing de direção visual para eliminar clichês de IA.
- Perfis de execução: `Performance First`, `Visual Experience` e `Application UI`.
- Perfis isolados para DaisyUI e Park UI.
- Quality Gates completos cobrindo responsividade (320px a 1440px), acessibilidade e performance.
- Instalador seguro `install.sh` com suporte a `--link`, `--copy`, `--dry-run`, `--status` e `--uninstall`.
- Receitas completas e autocontidas: `local-business-landing.tsx` e `saas-landing.tsx`.
