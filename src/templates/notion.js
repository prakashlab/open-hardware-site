/* eslint-disable */

import * as React from "react"
import { graphql } from "gatsby";
import { Container } from "@reflexjs/components"
import { Block } from "@reflexjs/gatsby-theme-block"
import notionRendererFactory from 'gatsby-source-notionso/lib/renderer';
import NotionBlockRenderer from '../components/notionBlockRenderer';
import { Helmet } from "react-helmet"

const Template = ({ data, pageContext }) => {
  const notionRenderer = notionRendererFactory({
    notionPage: data.notionPageDoc,
  });
  return (
  <React.Fragment>
    <Helmet>
      <title>{data.notionPageDoc.title} | {data.site.siteMetadata.title}</title>
    </Helmet>
    <Block src="header" />
    <Container>
      <NotionBlockRenderer
        data={data}
        renderer={notionRenderer}
        debug={false}
      />
    </Container>
    <Block src="footer" />
  </React.Fragment>
  );
};

export const query = graphql`
  query($pageId: String!) {
    site {
      siteMetadata {
        title
      }
    }
    notionPageDoc(pageId: { eq: $pageId }) {
      blocks {
        blockId
        blockIds
        type
        attributes {
          att
          value
        }
        properties {
          propName
          value {
            text
            atts {
              att
              value
            }
          }
        }
      }
      imageNodes {
        imageUrl
        localFile {
          publicURL
        }
      }
      pageId
      slug
      title
      isDraft
      id
      indexPage
    }
  }
`;

export default Template;
