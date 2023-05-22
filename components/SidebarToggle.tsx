import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

type Props = {
  onToggleSidebar: (isOpen: boolean) => void;
  isOpen: boolean;
};

const SidebarToggle = (props: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    props.onToggleSidebar(newIsOpen);
  };
  return (
    <button
      className={`absolute top-6 left-4 ${
        isOpen ? "text-white" : "text-black"
      } pl-2 rounded text-2xl after:animate-spin`}
      onClick={toggleSidebar}
    >
      <RxHamburgerMenu />
    </button>
  );
};

export default SidebarToggle;
