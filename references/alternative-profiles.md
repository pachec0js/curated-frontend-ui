# Perfis Isolados: DaisyUI e Park UI

Esta referência documenta o uso isolado de **DaisyUI** e **Park UI**, que **NUNCA** devem ser misturadas com a stack padrão de Tailwind CSS.

---

## 1. Perfil DaisyUI (Prototipagem Estática Ultra-Rápida)
- **Quando usar**: Apenas se o usuário pedir explicitamente DaisyUI ou se o projeto for puramente HTML estático/Vanilla sem React ou dependências pesadas.
- **Vantagem**: Fornece classes semânticas como `btn`, `btn-primary`, `card`, `badge`, sem precisar de componentes React.
- **Proibição**: Nunca combine classes do DaisyUI com componentes do shadcn/ui no mesmo projeto, pois haverá conflito de especificidade e quebra do design system.

---

## 2. Perfil Park UI (Ecossistema Panda CSS)
- **Quando usar**: Apenas quando o projeto do cliente for construído sobre **Panda CSS** e **Ark UI**.
- **Proibição**: Nunca instale Park UI em projetos baseados em Tailwind CSS, pois isso introduz dois compiladores de CSS simultâneos competindo entre si.
