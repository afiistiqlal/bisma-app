import Layout from "@/components/Layout";
import ProtectedRoute from "@/utils/ProtectedRoute";

type Props = {
  user: any;
};

const Dashboard = ({ user }: Props) => {
  const pageTitle = "Dashboard";
  return (
    <Layout title={pageTitle}>
      <div>
        <div>Dashboard Content</div>
      </div>
    </Layout>
  );
};

export default ProtectedRoute(Dashboard);
