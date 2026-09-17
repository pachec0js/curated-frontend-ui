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

---

## 3. Regra Mandatória: Alinhamento Horizontal Estrito em Botões com Ícones

Para evitar o erro crítico onde botões com ícones quebram em múltiplas linhas verticais (ícone empilhado acima do texto, seta abaixo ou desalinhada), siga rigorosamente:

### A. Classes Estruturais Obrigatórias
Todo botão ou link com aparência de botão contendo ícones (à esquerda e/ou à direita) **DEVE** incluir estritamente:
```tsx
inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap
```

### B. Primitivo Button com Radix Slot (`asChild`)
O componente `Button` do shadcn/ui deve **SEMPRE** utilizar `@radix-ui/react-slot` para suportar composição polimórfica com links (`<a>`):
```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  // variantes...
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

### C. Ícones Lucide com Dimensões Fixas e `shrink-0`
Os ícones (`lucide-react`) dentro de botões **DEVEM SEMPRE** conter a classe `shrink-0` e dimensões fixas proporcionais:
- `w-4 h-4 shrink-0` para tamanhos padrão (`default`, `sm`)
- `w-5 h-5 shrink-0` para tamanhos maiores (`lg`, Hero CTA)

### D. Envolvimento Seguro do Texto Interno
O texto do botão com ícone deve estar **SEMPRE** envolvido em uma tag `<span>` para assegurar o alinhamento no eixo cruzado e impedir quebras involuntárias:
```tsx
{/* Padrão correto */}
<Button asChild>
  <a href="#contato" className="inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap">
    <Calendar className="w-4 h-4 shrink-0" />
    <span>Agendar Consulta</span>
    <ArrowRight className="w-4 h-4 shrink-0" />
  </a>
</Button>
```

