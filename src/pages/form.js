import React from "react";
import SignUp from "../components/SignUp";
import Layout from "../layouts";
import SEO from "../components/seo";

const FormPage = () => {
  return (
    <Layout>
      <SEO title="Sign Up" />
      <SignUp></SignUp>
    </Layout>
  );
};

export default FormPage;
