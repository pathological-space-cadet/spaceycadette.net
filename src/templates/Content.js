import { graphql } from "gatsby"

export { ContentView_ContentView as default } from "../components/Content.fs"

export const query = graphql`
  query ContentQuery($id: String!) {
    allMarkdownRemark(filter: { id: { eq: $id } }, limit: 1) {
      nodes {
        frontmatter {
          title
          publishedAt
          tags
        }
        html
      }
    }
  }
`
