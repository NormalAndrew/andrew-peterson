const path = require(`path`)

exports.createSchemaCustomization = ({actions, schema}) => {
  const { createTypes } = actions
  const typeDefs = [
    "type MarkdownRemark implements Node { frontmatter: Frontmatter }",
    schema.buildObjectType({
      name: "Frontmatter",
      fields: {
        tools: {
          type: "[String!]",
          resolve(source, args, context, info) {
            const { tools } = source
            if (source.tools == null || (Array.isArray(tools) && !tools.length)) {
              return [""]
            }
            return tools
          },
        },
      },
    }),
  ]
  createTypes(typeDefs)
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              tools
            }
          }
        }
      }
    }
  `)

  if (result.error) {
    console.error(result.errors)
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/portfolioPostTemplate.js`),
      context: {
        tools: node.frontmatter.tools,
      }
    })
  })
}