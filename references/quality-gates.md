# Quality Gates & Critérios de Homologação

Nenhum front-end desenvolvido sob esta skill deve ser considerado concluído sem passar pelos seguintes critérios de verificação:

---

## 1. Checklist Obrigatório

### A. Responsividade e Layout
- [ ] **320px** (telas pequenas antigas): Texto legível, botões clicáveis, sem corte de conteúdo.
- [ ] **375px** (smartphone padrão): Menus móveis funcionam perfeitamente, botões têm área de toque >= 44x44px.
- [ ] **768px** (tablet): Grids adaptam de 1 para 2 colunas.
- [ ] **1024px / 1440px** (desktop e widescreen): Container centralizado (`max-w-6xl` ou `max-w-7xl mx-auto`), sem espaçamentos bizarros.
- [ ] **Sem Overflow Horizontal**: Não existe rolagem lateral indesejada na tela.

### B. Acessibilidade (a11y)
- [ ] **Navegação por Teclado**: É possível navegar em todos os links e botões usando `Tab` e `Shift+Tab`.
- [ ] **Anel de Foco Visível**: Todo elemento interativo exibe `focus-visible:ring-2 focus-visible:outline-none`.
- [ ] **Contraste Mínimo (WCAG AA)**: Relação de contraste de cores de texto de no mínimo 4.5:1 sobre o fundo.
- [ ] **Imagens com `alt`**: Todas as imagens possuem texto alternativo descritivo.

### C. Performance & Web Vitals
- [ ] **LCP (Largest Contentful Paint)**: A imagem do Hero possui carregamento prioritário (`priority` no Next.js ou `loading="eager"` no HTML).
- [ ] **CLS (Cumulative Layout Shift)**: Imagens e ícones possuem dimensões `width` e `height` explícitas para evitar saltos visuais.
- [ ] **Sem Dependências Mortas**: Nenhum pacote pesado foi importado sem ser efetivamente utilizado.

### D. Qualidade de Código
- [ ] **TypeScript**: Sem erros de tipagem (`tsc --noEmit`).
- [ ] **Componentização**: Cada seção vive em arquivo próprio dentro de `components/sections/`.
