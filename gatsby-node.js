const path = require("path")

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

exports.createPages = ctx => {
  return Promise.all(
    TAGS_FOR_WHICH_TO_CREATE_LIST_VIEWS.map(e => paginate(e, ctx))
  )
}
