import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Profile from "@/components/Profile";

type Props = {
  isOpen: boolean;
  title: string
};

const Sidebar = (props: Props) => {
  const [title, setTitle] = useState("");
  const isOpen = props.isOpen;
  const arrlink: { url: any; name: string }[] = [
    { url: "/", name: "Dashboard" },
    { url: "/AvailableStudent", name: "Available Student" },
    { url: "/MyProject", name: "My Project" },
    { url: "/PaymentSimulation", name: "Payment Simulation" },
    { url: "/SubmitPayment", name: "Submit Payment" },
  ];
  const pathname = usePathname();

  return (
    <aside
      className={`bg-[#252B42] w-64 ${
        isOpen ? "flex" : "hidden"
      } transition-width duration-150 ease-in-out rounded-r-3xl shadow-md shadow-black`}
    >
      <div className="w-full text-white">
        <Profile name={"Bayu Wicaksono"} role={"Staf Akademik"} />
        <div className="mt-8">
          {arrlink.map((value, index) => {
            const isActive = pathname === value.url;
            return (
              <Link
                key={index}
                className={
                  isActive
                    ? "flex ml-2 my-2 py-2 rounded-l-full bg-[#DFEBE9] text-black shadow-gray-400 shadow-inner"
                    : "flex ml-2 my-2 py-2"
                }
                href={value.url}
                onClick={() => setTitle(value.name)}
              >
                <li className="flex flex-row text-size-lg">
                  <div className="pl-8"></div>
                  <div className="pl-2 font-bold gap-4 ">{value.name}</div>
                </li>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
