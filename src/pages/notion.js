import * as React from "react"
import { graphql } from "gatsby"
import { A, Article, Container, H1, H2, P } from "@reflexjs/components"
import { Block } from "@reflexjs/gatsby-theme-block"
import { Helmet } from "react-helmet"

const IndexPage = ({ data }) => (
  <React.Fragment>
    <Helmet>
      <title>Notion Documentation | {data.site.siteMetadata.title}</title>
    </Helmet>
    <Block src="header" />
    <Container>
      <H1>Notion Documentation</H1>
      {data.allNotionPageDoc.edges.map(edge => (
        <Article mb="10">
          <A href={`notion/${edge.node.slug}`}>
            <H2 hoverColor="primary" my="0">
              {edge.node.pageIcon} {edge.node.title}
            </H2>
          </A>
          <P>{edge.node.excerpt}</P>
        </Article>
      ))}
    </Container>
    <Block src="footer" />
  </React.Fragment>
)

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allNotionPageDoc(
      filter: { isDraft: { eq: false } }
      sort: { fields: [indexPage], order: ASC }
    ) {
      edges {
        node {
          title
          slug
          excerpt
          pageIcon
        }
      }
    }
  }
`;
