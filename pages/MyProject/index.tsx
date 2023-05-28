import Layout from "@/components/Layout";
import { MdAdd } from "react-icons/md";
import { IoPencilOutline, IoSearchOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import React from "react";
import Link from "next/link";

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

const myProject = (props: Props) => {
  const pageTitle = "My Project";
  return (
    <Layout title={pageTitle}>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <Link href={"MyProject/NewProject"} className="btn bg-primary">
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
            onChange={() => {}}
            placeholder="Search..."
          />
        </div>
        <div className="overflow-x-auto shadow-lg shadow-gray-400 rounded-lg">
          <table className="table w-full text-center">
            <thead>
              <tr>
                <th></th>
                <th>Kegiatan Magang</th>
                <th>Tanggal</th>
                <th>Insentif</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myProjects.map((value, index) => {
                return (
                  <tr key={value.id} className="text-center">
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex flex-col justify-start">
                        <div className="flex font-semibold">
                          {value.kegiatanMagang}
                        </div>
                        <div className="flex flex-row justify-start text-sm items-center">
                          <div className="">Prodi Teknik</div>
                          <div className="px-2">|</div>
                          <p className="text-left">2 Mahasiswa </p>
                          <div
                            className="tooltip tooltip-top inline-table"
                            data-tip="Cheva Nicuba (104119002)
                            Lukas Irawan (104120023)"
                          >
                            <BsFillPeopleFill className="text-xl mx-2" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{value.tanggal}</td>
                    <td>{value.insentif}</td>
                    <td>{value.status}</td>
                    <td>
                      <div className="flex flex-row justify-center items-center h-full m-1 ">
                        <a href="" className="btn btn-ghost btn-xs">
                          <div
                            className="tooltip tooltip-top text-xs normal-case"
                            data-tip="View"
                          >
                            <IoSearchOutline className="text-xl" />
                          </div>
                        </a>
                        <a href="" className="btn btn-ghost btn-xs">
                          <div
                            className="tooltip tooltip-top text-xs normal-case"
                            data-tip="Edit"
                          >
                            <IoPencilOutline className="text-xl" />
                          </div>
                        </a>
                        <a href="" className="btn btn-ghost btn-xs">
                          <div
                            className="tooltip tooltip-top text-xs normal-case"
                            data-tip="Delete"
                          >
                            <AiOutlineClose className="text-2xl text-red-600" />
                          </div>
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default myProject;
