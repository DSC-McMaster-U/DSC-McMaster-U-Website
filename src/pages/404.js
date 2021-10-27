import React from "react";
import Layout from "../layouts";
import Navbar from "../components/Navbar";

const NotFoundPage = () => (
  <Layout page="404">
    <Navbar />
    <h1>404: Not Found :(</h1>
  </Layout>
);

export default NotFoundPage;
