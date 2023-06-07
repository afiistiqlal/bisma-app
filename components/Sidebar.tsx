import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Profile from "@/components/Profile";
import { RxDashboard, RxDesktop, RxPerson } from "react-icons/rx";
import { MdPayment, MdAttachMoney } from "react-icons/md";
import Logout from "./Logout";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

type Props = {
  isOpen: boolean;
  title: string;
};

function renderEventContent(eventInfo: any) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

const Sidebar = (props: Props) => {
  const events = [{ title: "Meeting", start: new Date() }];
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
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
      className={`bg-[#252B42] w-72 ${
        isOpen ? "flex" : "hidden"
      } transition-width duration-150 ease-in-out rounded-r-3xl shadow-md shadow-black min-h-full sticky top-0`}
    >
      <div className="w-full text-white">
        <Profile />
        <div className="mt-10">
          {arrlink.map((value, index) => {
            const isActive = pathname === value.url;
            return (
              <Link
                key={index}
                className={
                  isActive
                    ? "flex my-3 ml-2 py-2 rounded-l-full bg-[#DFEBE9] text-black shadow-gray-400 shadow-inner"
                    : "flex my-3 ml-2 py-2 rounded-l-full hover:bg-gray-700 hover:shadow-inner"
                }
                href={value.url}
                onClick={() => setTitle(value.name)}
              >
                <li className="flex flex-row text-size-lg">
                  <div
                    className={`pl-8 text-xl flex items-center ${
                      isActive ? "text-[#252B42]" : "text-[#FDCF6F]"
                    }`}
                  >
                    {value.icon}
                  </div>
                  <div className="pl-2 font-medium flex items-center">
                    {value.name}
                  </div>
                </li>
              </Link>
            );
          })}
          <Logout />
        </div>
        <div className="mt-8 m-2 p-2 bg-[#DFEBE9] text-black text-[9px] my-calendar rounded-xl shadow-md shadow-black">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            fixedWeekCount={false}
            weekends={true}
            events={events}
            eventContent={renderEventContent}
            height={320}
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
