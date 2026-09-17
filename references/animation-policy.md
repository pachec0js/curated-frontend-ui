# Política de Animação Progressiva

A animação deve servir à usabilidade e ao encantamento, nunca prejudicar a velocidade ou a navegação do usuário.

---

## 1. Os 3 Níveis de Animação

```
Nível 1: CSS / Tailwind (Transições Leves)
  └─> Padrão para 90% das landing pages comerciais e botões
Nível 2: Motion para React (Gestos e Entradas)
  └─> Usado quando há modais complexos, drawers ou sequências coreografadas
Nível 3: Magic UI / Aceternity UI (Efeitos Especiais)
  └─> Restrito a seções nobres (Hero, Bento Grid) no perfil Visual Experience
```

### Nível 1: CSS Nativo & Tailwind (Recomendado & Padrão)
Utilize classes utilitárias nativas do Tailwind para interações de resposta imediata:
- `transition-all duration-200 ease-out`
- `hover:scale-[1.02] active:scale-[0.98]`
- `hover:shadow-lg`

### Nível 2: Motion (`motion/react`)
Para animações de entrada orquestradas:
```tsx
import * as motion from "motion/react-client";

export function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

### Nível 3: Efeitos Especiais (Magic UI / Aceternity)
Reservado para elementos onde o visual é o diferencial do produto.

---

## 2. Regras Rígidas de Performance e Acessibilidade

1. **Respeito a `prefers-reduced-motion`**:
   - Para usuários com sensibilidade vestibular, toda animação deve ser desabilitada ou reduzida a um fade simples:
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, ::before, ::after {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```
2. **Zero Layout Shifts (CLS = 0)**:
   - Nunca anime propriedades que afetem a geometria da página (`width`, `height`, `margin`, `padding`, `top`, `left`).
   - Anime **apenas** `transform` e `opacity` (compostas pela GPU sem repaint).
