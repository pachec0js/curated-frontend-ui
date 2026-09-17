# Matriz de Seleção e Desempate de Componentes

Para evitar redundâncias e indecisões do agente, siga esta hierarquia clara de componentes:

---

## 1. O Desempate Inequívoco

| Tipo de Elemento | Tecnologia Obrigatória | Justificativa Técnica |
| :--- | :--- | :--- |
| **Primitivo Interativo com Estado** (`Dialog`, `Modal`, `DropdownMenu`, `Select`, `Tabs`, `Accordion`, `Sheet`, `Tooltip`, `Popover`) | **shadcn/ui** | Acessibilidade Radix UI integrada, gestão de foco no teclado, armadilha de foco, suporte ARIA e tipagem TypeScript. |
| **Campos e Formulários com Validação** (`Input`, `Textarea`, `Checkbox`, `Form`, `Label`) | **shadcn/ui** | Integração nativa com `react-hook-form` e `zod`. Prevenção de erros de acessibilidade em labels. |
| **Elementos Simples sem Estado** (Botões comuns, links de âncora, badges informativos, tabelas estáticas de dados) | **HTML Semântico + Tailwind** | Menor peso de bundle, código mais limpo e direto, sem abstrações desnecessárias. |
| **Seções Estruturais de Marketing** (`Pricing Tables`, `Footers`, `Grids de Depoimentos`, `Hero Section Layouts`, `FAQ Layouts`) | **Flowbite Blocks (Estáticos)** | Agiliza a montagem de layouts macro responsivos. Os botões e inputs internos usam shadcn/ui. Proibido usar JS do Flowbite. |
| **Microinterações Contínuas** (`Border Beam`, `Shimmer Button`, `Animated Beam`, `Number Ticker`, `Interactive Dock`) | **Magic UI** | Encantamento visual sutil, bordas brilhantes e dinamismo em elementos pontuais. |
| **Showstoppers & Animações Centrais** (`Aurora Background`, `Spotlight`, `3D Cards`, `Lamp Header`, `Bento Grids`) | **Aceternity UI** | Hero sections impactantes e elementos 3D com Framer Motion. |

---

## 2. Exemplos de Composição Harmonizada

### Exemplo 1: Seção de FAQ
- **Estrutura Macro**: Inspirada nos blocos limpos do Flowbite.
- **Interatividade & Sanfona**: Feita com o componente `<Accordion>` do **shadcn/ui** (suporte nativo a teclado e fechamento suave).
- **Resultado**: Acessível, responsivo e semanticamente perfeito.

### Exemplo 2: Hero Section com Alto Impacto
- **Background**: `Spotlight` ou `Aurora` do **Aceternity UI**.
- **Badge Superior**: `BorderBeam` ou `AnimatedGradientText` do **Magic UI**.
- **Botões de Ação**: `<Button>` do **shadcn/ui** estilizado com classes do Tailwind.
