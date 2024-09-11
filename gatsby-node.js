const path = require("path");

// Define the types for EventsJson and any other data sources
exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions;
  createTypes([
    `type EventsJson implements Node {
      title: String
      link: String
      time: String
      location: String
      date: String
    }`,
    // You can add other types here if needed
  ]);
};

// Dynamically create pages for newsletters based on markdown files
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query markdown files for newsletters
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              date(formatString: "YYYY-MM")
            }
            id
          }
        }
      }
    }
  `);

  // Create pages for each newsletter markdown file
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/newsletters/${node.frontmatter.slug}`, // URL based on slug (e.g., september-newsletter)
      component: path.resolve("./src/templates/newsletter-template.js"),
      context: {
        id: node.id, // Pass ID to the template for querying
      },
    });

    // Optionally create date-based URLs (e.g., /newsletter/2024-09)
    createPage({
      path: `/newsletters/${node.frontmatter.date}`,
      component: path.resolve("./src/templates/newsletter-template.js"),
      context: {
        id: node.id,
      },
    });
  });
};
