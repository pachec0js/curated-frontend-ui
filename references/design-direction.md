# Camada de Direção Visual (Design Direction)

O objetivo desta diretriz é **eliminar o visual genérico de IA** (como fundos brancos sem contraste, gradientes roxo/azul repetitivos, caixas arredondadas padronizadas e tipografia sem personalidade).

Antes de gerar qualquer linha de código, formule mentalmente ou documente um **Briefing Visual Interno**:

---

## 1. Os 5 Pilares do Briefing Visual

1. **Segmento & Tom de Voz**:
   - Saúde/Medicina: Tons acolhedores, orgânicos e limpos. Tipografia humanizada.
   - Jurídico/Financeiro: Alto contraste, sobriedade, fontes serifadas clássicas de autoridade.
   - Tech/SaaS: Linhas nítidas, detalhes em microinterações e densidade controlada.
   - Gastronomia/Comércio Local: Cores quentes, fotos em destaque e apelo sensorial imediato.
2. **Paleta com Propósito (Sem Clichês de IA)**:
   - Defina 1 cor de fundo principal (evite branco absoluto `#FFFFFF` frio; prefira off-white suave ou tom quente como `#FAF8F5`, `#F8FAFC`).
   - Defina 1 cor primária de marca com alto contraste.
   - Defina 1 cor de destaque exclusiva para o CTA principal (ex: verde de conversão WhatsApp ou laranja vibrante de ação).
   - Defina cores de texto garantindo contraste WCAG AAA sobre o fundo.
3. **Escala Tipográfica & Personalidade**:
   - Títulos (H1, H2): Escolha uma fonte com forte identidade (ex: `font-serif` para sofisticação, ou sans-serif geométrica marcante).
   - Corpo do Texto: Fonte neutra com excelente legibilidade em telas móveis (`Inter`, `Plus Jakarta Sans`, `Geist`).
4. **Espaçamento e Densidade**:
   - Páginas de conversão e serviços precisam de "respiro" (espaçamentos `py-16 md:py-24`).
   - Dashboards exigem densidade e aproveitamento de tela (`py-4`, `gap-4`).
5. **Nível de Movimento Adequado**:
   - Páginas comerciais usam movimento sutil (nível 1). O foco é leitura rápida e conversão.

---

## 2. Exemplo Prático de Briefing: Clínica de Estética / Saúde

- **Conceito**: Minimalismo Acolhedor (*Warm Minimalist*).
- **Paleta**:
  - Background: `#FAF7F2` (Linho quente)
  - Superfícies/Cards: `#FFFFFF` (Branco puro para destaque sobre o linho)
  - Texto Principal: `#242D28` (Verde floresta profundo, contraste 11:1)
  - Acento Primário: `#556B5D` (Verde sálvia sofisticado)
  - Acento de Ação / WhatsApp: `#1E7E55` (Verde conversão vibrante)
- **Tipografia**: Títulos em serif elegante com kerning relaxado; subtítulos em sans-serif refinada.
- **Resultado**: Uma interface que transmite acolhimento e sofisticação imediata, sem parecer um template genérico de tecnologia.
