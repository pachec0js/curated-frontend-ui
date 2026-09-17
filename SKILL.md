---
name: curated-frontend-ui
version: 1.0.0
description: >-
  Especialista sênior em design e implementação de front-end com ecossistema Tailwind CSS curado.
  Utilize esta skill sempre que o usuário pedir criação de landing pages, interfaces completas,
  componentes visuais, páginas de conversão ou refatoração estética.
  Aplica estritamente: shadcn/ui (primitivos interativos), Flowbite (layouts macro de marketing),
  Magic UI (microinterações) e Aceternity UI (showstoppers visuais), orientados por direção visual prévia,
  animação progressiva e quality gates rigorosos.
---

# Curated Frontend UI Skill (v1.0.0)

> **Princípio Orientador:** *"A skill não deve ser especialista em usar muitas bibliotecas. Deve ser especialista em entregar excelentes interfaces, escolhendo as bibliotecas certas quando necessário."*

---

## 1. Fluxo de Execução do Agente

Ao receber qualquer tarefa de desenvolvimento front-end, o agente **DEVE** seguir este fluxo ordenado:

1. **Briefing Visual Interno**: Definir objetivo comercial, paleta contrastante, tipografia e densidade visual antes de escrever código (consulte [design-direction.md](./references/design-direction.md)).
2. **Seleção do Perfil**:
   - **`Performance First`** *(Padrão para negócios locais e landing pages comerciais)*: Foco em LCP imediato, CSS nativo, mínimo JavaScript.
   - **`Visual Experience`** *(Portfólios criativos e tech launches)*: Efeitos visuais justificados (Motion, Magic UI, Aceternity).
   - **`Application UI`** *(Dashboards e SaaS complexos)*: Foco em formulários, tabelas e estados de dados com shadcn/ui.
3. **Seleção Cirúrgica de Componentes**:
   - Elementos simples -> HTML semântico direto com Tailwind.
   - Primitivos com estado (modais, formulários, selects, tabs, accordions) -> **MANDATÓRIO: shadcn/ui**.
   - Seções estruturais de marketing (pricing, footers, grids de depoimentos) -> **Flowbite Blocks** (estáticos).
   - Microinterações -> **Magic UI**.
   - Efeitos 3D e hero cinematográfico -> **Aceternity UI**.
4. **Animação Progressiva**:
   - Nível 1 (CSS/Tailwind) -> Nível 2 (`motion/react`) -> Nível 3 (Showstoppers). Respeite sempre `prefers-reduced-motion`.
5. **Quality Gates**:
   - Auditar responsividade (320px a 1440px), acessibilidade (teclado, ARIA, contraste) e performance (sem layout shift).

---

## 2. Core Stack Declarado

Toda implementação assume a seguinte stack homogênea baseada em Tailwind CSS:

- **Framework**: React / Next.js (App Router) ou Vite + TypeScript.
- **Estilização**: Tailwind CSS v3 ou v4 (com detecção prévia, consulte [core-stack.md](./references/core-stack.md)).
- **Utilitários**: `clsx`, `tailwind-merge`, `class-variance-authority` (cva).
- **Ícones**: `lucide-react`.
- **Animações**: `motion` (`motion/react`) ou `framer-motion` (quando necessário no Perfil Visual).

---

## 3. Regras Mandatórias de Decisão

1. **Desempate shadcn/ui vs Flowbite**:
   - Qualquer componente que possua estado ou interatividade (`Dialog`, `Dropdown`, `Form`, `Input`, `Select`, `Accordion`, `Sheet`) **DEVE** vir do shadcn/ui.
   - **NUNCA** utilize o JavaScript ou modais/forms interativos do Flowbite. O Flowbite é reservado exclusivamente para estruturas de layout macro de marketing.
2. **Snippets Locais e Fallback Online**:
   - Consulte prioritariamente os snippets e referências locais na pasta `references/` e `recipes/`.
   - Caso o usuário mencione uma prop, versão ou componente recente não catalogado, alerte a discrepância e consulte a documentação oficial:
     - shadcn/ui: `https://ui.shadcn.com/docs/components`
     - Aceternity: `https://ui.aceternity.com/components`
     - Magic UI: `https://magicui.design/docs/components`
     - Flowbite: `https://flowbite.com/docs/components`
3. **Cláusula de Escape**:
   - Se precisar de gráficos avançados, mapas ou editores ricos, siga rigorosamente [escape-hatch.md](./references/escape-hatch.md) (Recharts/Tremor, Leaflet, TipTap) preservando os tokens Tailwind do projeto.
4. **Perfis Isolados (DaisyUI e Park UI)**:
   - DaisyUI e Park UI estão descritas em [alternative-profiles.md](./references/alternative-profiles.md). **NUNCA** misture suas classes com o core Tailwind em um mesmo projeto.

---

## 4. Índice de Referências Rápidas

- [Direção Visual e Briefing](./references/design-direction.md)
- [Stack Central e Detecção de Tailwind v3/v4](./references/core-stack.md)
- [Matriz de Seleção de Componentes](./references/component-selection.md)
- [Política de Animação Progressiva](./references/animation-policy.md)
- [Quality Gates e Critérios de Homologação](./references/quality-gates.md)
- [Acessibilidade (a11y)](./references/accessibility.md)
- [Performance & Web Vitals](./references/performance.md)
- [Cláusula de Escape para Recursos Especiais](./references/escape-hatch.md)
- [Perfis Isolados (DaisyUI & Park UI)](./references/alternative-profiles.md)
- [Receita Completa: Negócio Local (Performance First)](./recipes/local-business-landing.tsx)
- [Receita Completa: SaaS Tech (Visual Experience)](./recipes/saas-landing.tsx)
