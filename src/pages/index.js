import React from "react";

import Layout from "../layouts";
import SEO from "../components/seo";
import Events from "../components/events"
import "@fortawesome/fontawesome-free/css/all.min.css";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello World!</h1>
      <p>Welcome to the site.</p>
      <Events siteTitle={`Title`}/>
    </Layout>
  );
};

export default IndexPage;
