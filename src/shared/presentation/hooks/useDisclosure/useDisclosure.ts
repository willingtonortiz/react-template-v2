import { useState } from "react";

export type UseDisclosureProps = {
  defaultOpen?: boolean;
};

export function useDisclosure({ defaultOpen = false }: UseDisclosureProps = {}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return {
    isOpen,
    onOpen: () => setIsOpen(true),
    onClose: () => setIsOpen(false),
    onToggle: () => setIsOpen((prev) => !prev),
  };
}
