import React from "react";
import SignUp from "../components/SignUpForm";
import Layout from "../layouts";
import SEO from "../components/Seo";

const FormPage = () => {
  return (
    <Layout>
      <SEO title="Sign Up" />
      <SignUp></SignUp>
    </Layout>
  );
};

export default FormPage;
