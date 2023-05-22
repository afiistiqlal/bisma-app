import { useState } from "react";

type Props = {
  onToggleSidebar: (isOpen: boolean) => void;
  isOpen: boolean;
};

const SidebarToggle = (props : Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    props.onToggleSidebar(newIsOpen);
  };
  return (
    <button
      className={`absolute top-4 left-4 ${
        isOpen ? "text-white" : "text-black"
      } pl-2 rounded text-2xl `}
      onClick={toggleSidebar }
    >
      ⇋
    </button>
  );
};

export default SidebarToggle;
