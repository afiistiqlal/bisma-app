import Layout from "@/components/Layout";
import ProtectedRoute from "@/utils/ProtectedRoute";
import Card from "@/components/Dashboard/Card";
import Expenses from "@/components/Dashboard/Expenses";
import WaitingPayment from "@/components/Dashboard/WaitingPayment";
import OnGoingProject from "@/components/Dashboard/OnGoingProject";
import TopMagang from "@/components/Dashboard/TopMagang";

type Props = {
  user: any;
};

const Dashboard = ({ user }: Props) => {
  const pageTitle = "Dashboard";
  return (
    <Layout title={pageTitle}>
      <div className="mx-2 mb-2 rounded-lg ">
        <div className="flex flex-row justify-between gap-4">
          <Card title="Total Expense" data={"Rp 4.900.000"} />
          <Card title="Finish Project" data={"7"} />
          <Card title="Approved Project" data={"2"} />
          <Card title="Waiting Payment" data={"3"} />
        </div>
        <div className="flex flex-row my-6">
          <Expenses />
          <WaitingPayment />
        </div>
        <div className="flex mt-6">
          <div className="w-1/2 h-96 mr-2">
            <OnGoingProject />
          </div>
          <div className="w-1/2 h-96 ml-2">
            <TopMagang />
          </div>
        </div>
      </div>
    </Layout>
  );
};

// export default ProtectedRoute(Dashboard);
export default Dashboard;
