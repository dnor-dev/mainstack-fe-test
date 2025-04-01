import { useState } from "react";

export const useDisclosure = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);

  const onOpen = () => setOpen(true);

  const onToggle = () => setOpen((prev) => !prev);

  const onChange = (d: boolean) => setOpen(d);

  return { open, onClose, onOpen, onToggle, onChange };
};
