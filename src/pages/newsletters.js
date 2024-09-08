import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../layouts";
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import "../styles/newsletters.css";

const NewslettersPage = ({ data }) => {
  const navbarItems = [{ link: "/newsletters", title: "Newsletters" }];
  
  const newsletters = data.allMarkdownRemark.edges;

  return (
    <Layout page="Newsletter">
      <Navbar items={navbarItems} />
      <div className="flex flex-col justify-center items-center mt-8">
        <h1>Newsletters</h1>
      </div>

      <div className="newsletter-grid">
        {newsletters.map(({ node }) => (
          <Link to={`/newsletters/${node.frontmatter.slug}`} key={node.id} className="newsletter-card">
            <div className="card-content">
              <h2>{node.frontmatter.title}</h2>
              <h3>{node.frontmatter.date}</h3>
              <p>{node.frontmatter.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            subtitle
            slug
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo />;
export default NewslettersPage;
