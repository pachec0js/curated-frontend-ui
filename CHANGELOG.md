# Changelog - Curated Frontend UI Skill

## [1.0.1] - 2026-09-17
### Hotfix: Alinhamento Horizontal Estrito de Botões, Ícones e Suporte Nativo ao Radix Slot
- **Alinhamento Horizontal Estrito**: Adicionada regra mandatória para que todo botão ou link com ícones utilize estritamente `inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap`, eliminando quebras verticais indesejadas (ícone no topo, texto no meio e seta abaixo).
- **Suporte ao Radix Slot (`asChild`)**: Exigência expressa de implementação de `@radix-ui/react-slot` (`Comp = asChild ? Slot : "button"`) no primitivo `Button` do shadcn/ui para repasse correto das classes flexíveis a elementos filhos como `<a>`.
- **Prevenção de Distorção de Ícones**: Obrigatoriedade da classe `shrink-0` e dimensões fixas (`w-4 h-4` ou `w-5 h-5`) em ícones Lucide dentro de botões.
- **Isolamento Textual**: Envolvimento de rótulos textuais de botões com `<span>` para garantir alinhamento vertical estável e ausência de quebras involuntárias.
- **Atualização de Referências e Receitas**: Documentado em `references/component-selection.md`, `references/quality-gates.md` e corrigido nas receitas `recipes/local-business-landing.tsx` e `recipes/saas-landing.tsx`.

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
