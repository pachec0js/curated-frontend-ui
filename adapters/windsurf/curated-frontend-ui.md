# Diretrizes Front-End (Windsurf Cascade)

Regras para criação e manutenção de interfaces front-end:
- Core Stack: Tailwind CSS + React + Framer Motion/Motion + Lucide React.
- shadcn/ui é a escolha prioritária para formulários e componentes com estado.
- Estruturas de marketing derivam de blocos estáticos do Flowbite com botões shadcn.
- Todo layout deve ser responsivo em larguras 320px, 375px, 768px, 1024px e 1440px.
- Botões com ícones requerem estritamente `inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap`, ícones com `shrink-0` e suporte a `asChild` com `@radix-ui/react-slot`.

