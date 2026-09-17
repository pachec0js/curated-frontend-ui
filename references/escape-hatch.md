# Cláusula de Escape (Recursos Especiais Não Cobertos)

Quando a aplicação necessitar de componentes complexos que não são cobertos pelas 4 bibliotecas da stack (shadcn, Flowbite, Magic UI, Aceternity), o agente está autorizado a usar as seguintes soluções homologadas:

| Domínio Especializado | Biblioteca Homologada | Regra de Uso |
| :--- | :--- | :--- |
| **Gráficos e Métricas** | **Recharts** ou **Tremor** | Envolva em cards do shadcn/ui e adapte as cores das barras e linhas à paleta do Tailwind do projeto. |
| **Mapas Interativos** | **Leaflet** (`react-leaflet`) ou **Mapbox GL** | Isole o carregamento dinâmico (`ssr: false`) para não quebrar a hidratação do React. |
| **Editor de Texto Rico (WYSIWYG)** | **TipTap** | Utilize as classes `@tailwindcss/typography` (`prose`) para renderizar a saída formatada. |
| **Date Range Picker Avançado** | **react-day-picker** (via shadcn/ui) | Utilize o wrapper nativo do shadcn/ui (`Calendar` / `DatePickerWithRange`). |

### Regra de Ouro da Cláusula de Escape:
> A biblioteca externa pode ser introduzida, mas os containers, botões, modais e tokens de cores devem **obedecer obrigatoriamente ao tema Tailwind do projeto**, garantindo unidade visual absoluta.
