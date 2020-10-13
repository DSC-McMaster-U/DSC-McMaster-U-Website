import React from "react";

import Layout from "../layouts";
import SEO from "../components/seo";
import Button from "../components/Button";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello World!</h1>
    <p>Welcome to the site.</p>
    <Button size="sm" size="lg" className="mr-8" float>
      Press Me
    </Button>
  </Layout>
);

export default IndexPage;
