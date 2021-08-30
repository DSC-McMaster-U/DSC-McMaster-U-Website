import React from "react";
import SignUp from "../components/SignUpForm";
import Layout from "../layouts";
import Navbar from "../components/Navbar";
const FormPage = () => {
  return (
    <Layout page="Sign Up">
      <Navbar />
      <SignUp></SignUp>
    </Layout>
  );
};

export default FormPage;
