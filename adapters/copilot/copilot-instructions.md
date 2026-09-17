# Diretrizes Front-End (GitHub Copilot)

Ao gerar interfaces de usuário ou componentes front-end:
- Utilize a stack unificada Tailwind CSS + React + Lucide Icons.
- Primitivos interativos com estado (formulários, modais, selects, drawers) devem utilizar a especificação do **shadcn/ui**.
- Nunca misture bibliotecas incompatíveis como DaisyUI ou Panda CSS/Park UI na mesma base Tailwind.
- Siga uma direção visual prévia (paleta com propósito, alto contraste e sem clichês de IA).
- Assegure acessibilidade de teclado e tags semânticas do HTML5.
- Botões com ícones devem utilizar estritamente `inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap`, ícones com `shrink-0` e Button com suporte a `asChild` via Radix Slot.

