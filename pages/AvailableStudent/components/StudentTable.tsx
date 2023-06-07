import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";

type Props = {
  data: any;
};

const StudentTable = ({ data }: Props) => {
  const [pageNumber, setPageSize] = useState(0);

  return (
    <table className="table w-full text-center drop-shadow-sm">
      <thead>
        <tr>
          <th>Program Studi</th>
          <th>Nama Mahasiswa</th>
          <th>Nomor Induk</th>
          <th>Sisa Waktu</th>
          <th>Telp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((v:any) => {
          return (
            <tr key={v.id}>
              <td>{v.prodi}</td>
              <td>{v.nama}</td>
              <td>{v.nim}</td>
              <td>{v.sisa_waktu}</td>
              <td>{v.telp}</td>
              <td>
                <Link
                  href="/AvailableStudent/DetailStudent/[id]]"
                  as={`/AvailableStudent/DetailStudent/${v.id}`}
                  className="btn btn-ghost btn-xs"
                >
                  <div
                    className="tooltip tooltip-top text-xs normal-case"
                    data-tip="View"
                  >
                    <IoSearchOutline className="text-xl" />
                  </div>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StudentTable;
