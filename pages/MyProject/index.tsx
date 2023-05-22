import Layout from "@/components/Layout";
import React from "react";

type Props = {};

const myProject = (props: Props) => {
  const pageTitle = "My Project";
  return (
    <Layout title={pageTitle}>
      <div className="">myProject</div>
    </Layout>
  );
};

export default myProject;
