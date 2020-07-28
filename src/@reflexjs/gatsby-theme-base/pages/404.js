import * as React from "react"
import { Container, H1 } from "@reflexjs/components"
import { Link, Icon } from "@reflexjs/gatsby-theme-core"
import { Block } from "@reflexjs/gatsby-theme-block"
import { Metatags } from "@reflexjs/gatsby-plugin-metatags"

export default () => (
  <React.Fragment>
    <Metatags pathname="/404" />
    <Block src="header" />
    <Container textAlign="center">
      <H1>404 - Page not found</H1>
      <Link to="/">
        <Icon name="arrow-left" mr="2" />
        Back home
      </Link>
    </Container>
    <Block src="footer" />
  </React.Fragment>
)
