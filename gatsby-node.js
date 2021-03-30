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
  ]);
};
