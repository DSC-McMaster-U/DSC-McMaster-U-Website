import React from "react";

import Layout from "../layouts";
import SEO from "../components/seo";
import Button from "../components/Button";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello World!</h1>
      <p>Welcome to the site.</p>
      <Button size="md" bg="red" variant="outline" float>
        Press Me
      </Button>
    </Layout>
  );
};

export default IndexPage;
