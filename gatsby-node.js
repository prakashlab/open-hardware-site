exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type !== "Page") {
    return
  }

  createNodeField({
    node,
    name: "chrome",
    value: node.chrome ? node.chrome : true,
  })
}

exports.createPages = async ({ graphql, actions, reporter }, options) => {
  const { createPage } = actions;

  const notionPageTemplate = require.resolve('./src/templates/notion.js');

  const result = await graphql(
    `
      query {
        allNotionPageDoc {
          edges {
            node {
              pageId
              slug
            }
          }
        }
      }
    `,
  );
  if (result.errors) {
    reporter.panic('error loading events', result.errors);
    return;
  }

  result.data.allNotionPageDoc.edges.forEach(({ node }) => {
    const path = `/notion/${node.slug}`;
    createPage({
      path,
      component: notionPageTemplate,
      context: {
        pathSlug: path,
        pageId: node.pageId,
      },
    });
  });
};
