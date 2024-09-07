import React from "react";
import Layout from "../layouts";
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import AboutCard from "../components/About/Card";
import { graphql } from "gatsby";
import "../styles/newsletter.css";


const NewsletterPage = ({ data }) => {
  const navbarItems = [{ link: "/newsletter", title: "Newsletter" }];
  
  // Get the first newsletter (most recent)
  const newsletter = data?.allMarkdownRemark?.edges?.[0]?.node;

  const title = newsletter?.frontmatter?.title || "Untitled";
  const date = newsletter?.frontmatter?.date || "No date available";
  const content = newsletter?.html || "<p>No newsletter content available</p>";

  return (
    <Layout page="Newsletter">
      <Navbar items={navbarItems} />
      
      <div className="flex flex-col justify-center items-center mt-8">
        {/* Render the title and date */}
        <h1>{title}</h1>
        <p>{date}</p>
      </div>

      <div className="newsletter-content" dangerouslySetInnerHTML={{ __html: content }} />
      
      <div id="other-newsletters" className="flex flex-row justify-evenly items-center pt-24 overflow-x-scroll gap-x-24 px-24">
        <AboutCard title={"newsletter 2"} body={"date yyyy-mm-dd"}></AboutCard>
        <AboutCard title={"newsletter 3"} body={"date yyyy-mm-dd"}></AboutCard>
        <AboutCard title={"newsletter 4"} body={"date yyyy-mm-dd"}></AboutCard>
        <AboutCard title={"newsletter 4"} body={"date yyyy-mm-dd"}></AboutCard>
        <AboutCard title={"newsletter 4"} body={"date yyyy-mm-dd"}></AboutCard>
        <AboutCard title={"newsletter 4"} body={"date yyyy-mm-dd"}></AboutCard>
        <AboutCard title={"newsletter 4"} body={"date yyyy-mm-dd"}></AboutCard>
        <AboutCard title={"newsletter 4"} body={"date yyyy-mm-dd"}></AboutCard>
        <AboutCard title={"newsletter 4"} body={"date yyyy-mm-dd"}></AboutCard>
        <AboutCard title={"newsletter 4"} body={"date yyyy-mm-dd"}></AboutCard>
        <AboutCard title={"newsletter 4"} body={"date yyyy-mm-dd"}></AboutCard>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")  # Date format: September 01, 2024
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo />;
export default NewsletterPage;
