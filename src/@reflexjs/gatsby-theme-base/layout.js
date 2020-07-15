import * as React from "react"
import { Container } from "@reflexjs/components"
import { MDXProvider } from "@reflexjs/gatsby-theme-core"
import { Block } from "@reflexjs/gatsby-theme-block"

export const Layout = ({
  header = "header",
  footer = "footer",
  children,
  pathname,
}) => (
  <React.Fragment>
    <MDXProvider>
      {header && <Block src={header} />}
      <Container>
          {children}
      </Container>
      {footer && <Block src={footer} />}
    </MDXProvider>
  </React.Fragment>
)
