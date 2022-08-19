import React from "react";
import Layout from "../layouts";
import Navbar from "../components/Navbar";
import Seo from "../components/Seo";

const NotFoundPage = () => (
  <Layout page="404">
    <Navbar />
    <h1>404: Not Found :(</h1>
  </Layout>
);

export const Head = () => <Seo />;
export default NotFoundPage;
