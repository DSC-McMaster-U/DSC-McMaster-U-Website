import React from "react";
import GForm from "../components/GForm";
import Layout from "../layouts";
import SEO from "../components/seo";

const FormPage = () => {
  return (
    <Layout>
      <SEO title="Sign Up" />
      <GForm></GForm>
    </Layout>
  );
};

export default FormPage;
