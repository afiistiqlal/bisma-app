import Layout from "@/components/Layout";
import { MdAdd } from "react-icons/md";
import React, { useState } from "react";
import Link from "next/link";
import ProjectTable from "./components/ProjectTable";

type Props = {};

const myProjects = [
  {
    id: 1,
    kegiatanMagang: "Asisten Praktikum",
    tanggal: "25 Januari 2023 - 1 February 2023",
    insentif: 12000000,
    status: "Draft",
  },
  {
    id: 2,
    kegiatanMagang: "Magang Akreditasi",
    tanggal: "25 Januari 2023 - 1 February 2023",
    insentif: 12000000,
    status: "Submitted",
  },
  {
    id: 3,
    kegiatanMagang: "Magang Pembuatan",
    tanggal: "25 Januari 2023 - 1 February 2023",
    insentif: 12000000,
    status: "Approved",
  },
  {
    id: 4,
    kegiatanMagang: "Magang Akreditasi",
    tanggal: "25 Januari 2023 - 1 February 2023",
    insentif: 12000000,
    status: "Finished",
  },
  {
    id: 5,
    kegiatanMagang: "Magang Akreditasi",
    tanggal: "25 Januari 2023 - 1 February 2023",
    insentif: 12000000,
    status: "Payment",
  },
];

const MyProject = (props: Props) => {
  const pageTitle = "My Project";
  const [filter, setFilter] = useState("");
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  return (
    <Layout title={pageTitle}>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between gap-4">
          <Link href={"MyProject/NewProject"} className="btn bg-primary flex items-center justify-center">
            <div className="text-white">
              <MdAdd className="text-xl text-blue-100" color="white" />{" "}
            </div>
            {""}New Project
          </Link>
          <input
            type="text"
            name="searchProject"
            id=""
            className="input input-bordered input-secondary w-72 shadow-inner"
            onChange={handleFilter}
            placeholder="Search..."
          />
        </div>
        <div className="overflow-x-auto shadow-lg shadow-gray-400 rounded-lg">
          <ProjectTable data={myProjects} filter={filter} />
        </div>
      </div>
    </Layout>
  );
};

export default MyProject;
