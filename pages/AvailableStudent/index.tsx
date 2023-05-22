import Layout from "@/components/Layout";
import React from "react";

type Props = {};

const availableStudent = (props: Props) => {
  const pageTitle = "Available Student";
  return (
    <Layout title={pageTitle}>
      <div className="">Available Student</div>
    </Layout>
  );
};

export default availableStudent;
