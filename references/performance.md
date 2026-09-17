# Otimização de Performance & Core Web Vitals

Instruções para garantir que a landing page carregue quase que instantaneamente:

1. **Hero Section Imediata (LCP)**:
   - A imagem principal da primeira dobra nunca deve ser lazy loaded. Use `priority={true}` (Next.js) ou `fetchpriority="high"`.
   - Evite carregar vídeos de fundo gigantescos na primeira dobra sem um poster estático leve.
2. **Fontes Web Otimizadas**:
   - Utilize `next/font` ou carregamento assíncrono com `display: swap` para evitar FOIT (Flash of Invisible Text).
3. **Formato de Imagens**:
   - Utilize formatos modernos (`WebP` ou `AVIF`).
4. **Carregamento Condicional de Scripts**:
   - Scripts de tracking (Google Analytics, Meta Pixel) devem carregar com estratégia `afterInteractive` ou `lazyOnload`.
