import React from "react";
import { MdAdd } from "react-icons/md";
import { IoPencilOutline, IoSearchOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import Link from "next/link";

type Props = {
  data: any;
  filter: string;
};

const ProjectTable = ({ data, filter }: Props) => {
  return (
    <table className="table w-full text-center">
      <thead>
        <tr>
          <th>{filter}</th>
          <th>Kegiatan Magang</th>
          <th>Tanggal</th>
          <th>Insentif</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value: any, index: any) => {
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
                  <Link href="/MyProject/ViewProject/[id]" as={`/MyProject/ViewProject/${value.id}`} className="btn btn-ghost btn-xs">
                    <div
                      className="tooltip tooltip-top text-xs normal-case"
                      data-tip="View"
                    >
                      <IoSearchOutline className="text-xl" />
                    </div>
                  </Link>
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
  );
};

export default ProjectTable;
