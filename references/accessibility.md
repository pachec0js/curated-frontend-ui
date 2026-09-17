# Diretrizes de Acessibilidade (a11y)

A beleza visual de um front-end não tem valor se a interface não puder ser utilizada por todas as pessoas.

1. **Semântica HTML**:
   - Use `<main>`, `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`.
   - Utilize apenas um `<h1>` por página.
   - Use `<button>` para ações e `<a>` para links de navegação. Nunca use `<div onClick=...>` sem atributos de acessibilidade.
2. **Área de Toque (Tap Targets)**:
   - Todo botão e link no mobile deve ter área clicável de no mínimo `44px x 44px` (`min-h-[44px] px-4 py-2`).
3. **Contraste de Cores**:
   - Evite cinza claro sobre fundo branco. Garanta contraste de pelo menos 4.5:1 para texto normal e 3:1 para textos grandes (>= 24px).
4. **Modais e Menus**:
   - Modais e gavetas móveis devem prender o foco dentro deles enquanto abertos e fechar ao pressionar a tecla `Escape`. (O shadcn/ui já faz isso por padrão).
