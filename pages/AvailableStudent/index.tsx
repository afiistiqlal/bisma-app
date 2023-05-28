import Layout from "@/components/Layout";
import ProtectedRoute from "@/utils/ProtectedRoute";
import StudentTable from "./components/StudentTable";
import { useEffect, useState } from "react";
import { Column } from "react-table";

type Props = {};

interface Data {
  id: number;
  name: string;
  age: number;
  program_studi: string;
}

const availableStudent = (props: Props) => {
  const pageTitle = "Available Student";

  const dataTest: Data[] = [
    { id: 1, name: "John", age: 25, program_studi: "h" },
    { id: 2, name: "Jane", age: 30, program_studi: "h" },
    // Add more data rows
  ];

  const [data, setData] = useState(dataTest);
  const columns: Column<Data>[] = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "Program Studi",
      accessor: "program_studi",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const jsonData = await response.json();
        setData(jsonData.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
console.log(data);
  return (
    <Layout title={pageTitle}>
      <div className="flex flex-col border-2 bg-white rounded-lg w-full shadow-lg p-2">
        <StudentTable data={data} columns={columns} />
      </div>
    </Layout>
  );
};

export default ProtectedRoute(availableStudent);
