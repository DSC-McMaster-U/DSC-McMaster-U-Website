import React from "react";
import Layout from "../layouts";
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import { graphql } from "gatsby";
import "../styles/newsletters.css";

const NewsletterTemplate = ({ data }) => {
  const navbarItems = [{ link: "/newsletters", title: "Newsletters" }];
  
  const newsletter = data.markdownRemark;

  const title = newsletter.frontmatter.title || "Untitled";
  const date = newsletter.frontmatter.date || "No date available";
  const content = newsletter.html || "<p>No newsletter content available</p>";

  return (
    <Layout page="Newsletter">
      <Navbar items={navbarItems} />
      <div className="flex flex-col justify-center items-center mt-8">
        <div className="title">{title}</div>
        <div className="date">{date}</div>
      </div>
      <div className="newsletter-content" dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export const Head = () => <Seo />;
export default NewsletterTemplate;
