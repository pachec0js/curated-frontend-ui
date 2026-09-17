# Core Stack & Detecção de Tailwind CSS

Esta referência define o contrato técnico da aplicação e orienta o agente na detecção e convivência com as versões do Tailwind CSS.

---

## 1. O Contrato de Dependências

```bash
# Utilitários essenciais
npm install clsx tailwind-merge class-variance-authority lucide-react

# Engine de Animação (Motion para React)
npm install motion
```

### O Utilitário Central `lib/utils.ts`
Todos os componentes utilizam a função `cn()` para fusão inteligente de classes:

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 2. Detecção Prévia de Versão do Tailwind

Antes de instalar ou configurar arquivos de estilo, inspecione `package.json`:

### Cenário A: Tailwind CSS v4 (Moderno)
- **Identificação**: `"tailwindcss": "^4.x.x"` ou presença de `@tailwindcss/vite` / `@tailwindcss/postcss`.
- **Configuração**: Não utiliza `tailwind.config.js`. A configuração vive diretamente no arquivo CSS principal (`globals.css` ou `app.css`):
  ```css
  @import "tailwindcss";

  @theme {
    --color-primary: #556B5D;
    --font-serif: var(--font-playfair), serif;
  }
  ```

### Cenário B: Tailwind CSS v3 (Legado Consolidado)
- **Identificação**: `"tailwindcss": "^3.x.x"` e arquivos `postcss.config.js` / `tailwind.config.js`.
- **Configuração**: Mantém as diretivas clássicas `@tailwind base; @tailwind components; @tailwind utilities;` e mapeamento de tokens via `tailwind.config.js`.

> [!WARNING]
> Nunca sobrescreva a configuração existente de um projeto sem antes detectar se ele roda v3 ou v4. Não instale `postcss` ou `autoprefixer` caso o projeto já utilize `@tailwindcss/vite`.
