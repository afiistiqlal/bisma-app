import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Profile from "@/components/Profile";
import { RxDashboard, RxDesktop, RxPerson } from "react-icons/rx";
import { MdPayment, MdAttachMoney } from "react-icons/md";
import Logout from "./Logout";

type Props = {
  isOpen: boolean;
  title: string;
};

const Sidebar = (props: Props) => {
  const [title, setTitle] = useState("");
  const isOpen = props.isOpen;
  const arrlink: { url: any; name: string; icon: any }[] = [
    { url: "/", name: "Dashboard", icon: <RxDashboard /> },
    { url: "/MyProject", name: "My Project", icon: <RxDesktop /> },
    {
      url: "/AvailableStudent",
      name: "Available Student",
      icon: <RxPerson />,
    },
    { url: "/SubmitPayment", name: "Submit Payment", icon: <MdAttachMoney /> },
    {
      url: "/PaymentSimulation",
      name: "Payment Simulation",
      icon: <MdPayment />,
    },
  ];
  const pathname = usePathname();

  return (
    <aside
      className={`bg-[#252B42] w-64 ${
        isOpen ? "flex" : "hidden"
      } transition-width duration-150 ease-in-out rounded-r-3xl shadow-md shadow-black`}
    >
      <div className="w-full text-white">
        <Profile />
        <div className="mt-8">
          {arrlink.map((value, index) => {
            const isActive = pathname === value.url;
            return (
              <Link
                key={index}
                className={
                  isActive
                    ? "flex ml-2 my-2 py-2 rounded-l-full bg-[#DFEBE9] text-black shadow-gray-400 shadow-inner"
                    : "flex ml-2 my-2 py-2 hover:bg-gray-700 rounded-l-full shadow-inner"
                }
                href={value.url}
                onClick={() => setTitle(value.name)}
              >
                <li className="flex flex-row text-size-lg">
                  <div className={`pl-8 text-xl flex items-center ${isActive ? "text-[#252B42]" : "text-[#FDCF6F]"}`}>{value.icon}</div>
                  <div className="pl-2 font-bold gap-4 flex items-center">{value.name}</div>
                </li>
              </Link>
            );
          })}
          <Logout />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
