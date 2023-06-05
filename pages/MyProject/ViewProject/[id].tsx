import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Status from "../components/Status";

type Props = {};

const kegiatanMagang = [
  {
    kegiatan_magang: "Magang Akreditasi",
    program_studi: "Program Studi Teknik Sipil",
    mahasiswa: ["Hamzah Dwiputra", "101117006"],
    durasi_kegiatan: "13 Jam",
    insentif: "325000",
  },
];

const ViewProject = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout title="My Project">
      <div className="shadow-md p-2 bg-yellow-50 rounded-lg">
        <table className="table w-full ">
          <thead>
            <tr>
              <th>Kegiatan Magang</th>
              <th>Nama Mahasiswa</th>
              <th>Durasi Kegiatan</th>
              <th>Insentif</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>
      <div className="">
        <Status />
      </div>
    </Layout>
  );
};

export default ViewProject;
