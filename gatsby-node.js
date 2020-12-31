const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const TAGS_FOR_WHICH_TO_CREATE_LIST_VIEWS = ["articles", "stories"]
const NUMBER_OF_POSTS_PER_PAGE_IN_LIST_VIEW = 12

// List view pagination functionality based on Content tag
async function paginate(tagName, { graphql, actions }) {
  const template = path.resolve(__dirname, "src/templates/ContentList.js")

  const { errors, data } = await graphql(
    `
      {
        allMarkdownRemark(filter: { frontmatter: { tags: { eq: "${tagName}" } } }) {
          totalCount
        }
      }
    `
  )

  if (errors) {
    throw new Error(`There was an error paginating articles with ${tagName}`)
  }

  const count = data.allMarkdownRemark.totalCount
  const pages = Math.ceil(count / NUMBER_OF_POSTS_PER_PAGE_IN_LIST_VIEW)

  Array.from({ length: pages }).forEach((_, i) => {
    const currentPageNumber = i + 1

    // if first page of pagination do not include number
    const currentPageNumberSlug =
      currentPageNumber === 1 ? "" : `/${currentPageNumber}`

    actions.createPage({
      path: `/${tagName}${currentPageNumberSlug}`, // attach current page number
      component: template,
      context: {
        limit: NUMBER_OF_POSTS_PER_PAGE_IN_LIST_VIEW,
        skip: i * NUMBER_OF_POSTS_PER_PAGE_IN_LIST_VIEW,
        currentPageNumber,
        totalPages: pages,
      },
    })
  })
}

// Create pages for each item in the content directory
async function createContentPages({ graphql, actions }) {
  const template = path.resolve(__dirname, "src/templates/Content.js")

  const { errors, data } = await graphql(
    `
      {
        allMarkdownRemark() {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (errors) {
    throw new Error("There was an error creating content pages.")
  }

  const contentEdges = data.allMarkdownRemark.edges

  contentEdges.forEach(e => {
    const path = e.node.fields.slug
    const id = e.node.id

    actions.createPage({
      path,
      component: template,
      context: {
        id,
      },
    })
  })
}

exports.createPages = ctx => {
  return Promise.all([
    ...TAGS_FOR_WHICH_TO_CREATE_LIST_VIEWS.map(e => paginate(e, ctx)),
    createContentPages(ctx),
  ])
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode })

    actions.createNodeField({
      name: "slug",
      node,
      value,
    })
  }
}

// Taken directly from starter-blog.
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }
    type Author {
      name: String
      summary: String
    }
    type Social {
      twitter: String
    }
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }
    type Fields {
      slug: String
    }
  `)
}
