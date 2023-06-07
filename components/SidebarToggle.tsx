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
      className={`absolute top-2 left-4 z-10 visible ${
        isOpen ? "text-white hover:bg-teal-950" : "text-black hover:bg-gray-400"
      } pl-2 text-2xl w-10 h-10 rounded-full`}
      onClick={toggleSidebar}
    >
      <RxHamburgerMenu />
    </button>
  );
};

export default SidebarToggle;
