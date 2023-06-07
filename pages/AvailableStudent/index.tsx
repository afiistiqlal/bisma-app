import Layout from "@/components/Layout";
import ProtectedRoute from "@/utils/ProtectedRoute";
import StudentTable from "./components/StudentTable";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import Showpage from "./components/Showpage";
import Pagination from "./components/Pagination";

type Props = {};

interface Data {
  id: number;
  prodi: string;
  nama: string;
  nim: string;
  sisa_waktu: string;
  telp: string;
}

const AvailableStudent = (props: Props) => {
  const pageTitle = "Available Student";

  const dataTest: Data[] = [
    {
      id: 1,
      prodi: "Teknik Kimia",
      nama: "Mahmud",
      nim: "09800123",
      sisa_waktu: "2 Jam",
      telp: "080810212312",
    },
    {
      id: 2,
      prodi: "Teknik Kimia",
      nama: "Mahmud",
      nim: "09800123",
      sisa_waktu: "2 Jam",
      telp: "080810212312",
    },
    {
      id: 3,
      prodi: "Teknik Kimia",
      nama: "Mahmud",
      nim: "09800123",
      sisa_waktu: "2 Jam",
      telp: "080810212312",
    },
    {
      id: 4,
      prodi: "Teknik Kimia",
      nama: "Mahmud",
      nim: "09800123",
      sisa_waktu: "2 Jam",
      telp: "080810212312",
    },
    {
      id: 5,
      prodi: "Teknik Kimia",
      nama: "Mahmud",
      nim: "09800123",
      sisa_waktu: "2 Jam",
      telp: "080810212312",
    },
  ];

  const [data, setData] = useState(dataTest);

  useEffect(() => {
    // fetchData();
  }, []);
  return (
    <Layout title={pageTitle}>
      <div className="flex flex-col bg-white rounded-lg w-full shadow-lg p-2">
        <Search />
        <StudentTable data={data} />
        <div className="flex flex-row justify-between mt-3">
          <div className="w-36 border rounded-lg flex justify-center items-center">
            <Showpage />
          </div>
          <Pagination />
        </div>
      </div>
    </Layout>
  );
};

// export default ProtectedRoute(AvailableStudent);
export default AvailableStudent;
