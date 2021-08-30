import React from "react";

import Layout from "../layouts";
import SEO from "../components/Seo";

const NotFoundPage = () => (
  <Layout page="404">
    <SEO title="404: Not found" />
    <h1>404: Not Found :(</h1>
  </Layout>
);

export default NotFoundPage;
