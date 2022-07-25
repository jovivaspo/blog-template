const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query getPosts {
      allContentfulPost {
        nodes {
          title
          slug
        }
      }
    }
  `)
  console.log(result)
  result.data.allContentfulPost.nodes.forEach(post => {
    createPage({
      path: `${post.slug}`,
      component: path.resolve("src/templates/postTemplate.js"),
      context: {
        title: post.title,
      },
    })
  })
}
