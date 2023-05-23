import { Inter } from "next/font/google";
import React, { ReactNode, useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Head from "next/head";
import SidebarToggle from "./SidebarToggle";

type LayoutProps = {
  children: ReactNode;
  title: string;
};

const inter = Inter({ subsets: ["latin"] });
const Layout = ({ children, title }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = (isOpen: boolean) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={`${inter.className} flex min-h-screen`}>
        <Sidebar isOpen={isSidebarOpen} title={title} />
        <SidebarToggle
          isOpen={isSidebarOpen}
          onToggleSidebar={handleToggleSidebar}
        />
        <div className="flex flex-col flex-1 gap-2">
          <header>
            <Navbar title={title} />
          </header>
          <main
            className={`flex-grow ${
              isSidebarOpen ? "ml-0" : "ml-0"
            } transition-margin duration-150 ease-in-out`}
          >
            <div className="mx-2 mb-2 shadow-md bg-stone-50 rounded-lg p-4">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
