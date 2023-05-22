import Layout from "@/components/Layout";
import React from "react";

type Props = {};

const submitPayment = (props: Props) => {
  const pageTitle = "Submit Payment";
  return (
    <Layout title={pageTitle}>
      <div>submitPayment</div>
    </Layout>
  );
};

export default submitPayment;
