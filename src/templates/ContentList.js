import { graphql } from "gatsby"

export { ContentListView_ContentListView as default } from "../components/Content.fs"

export const query = graphql`
  query ContentListViewQuery($tagName: String!, $limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { eq: $tagName } } }
      sort: { fields: frontmatter___publishedAt, order: ASC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          publishedAt
          tags
        }
        excerpt
      }
    }
  }
`
