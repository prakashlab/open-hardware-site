import * as React from "react"
import { Container, Section } from "@reflexjs/components"
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
      <Section py="8|12|16|24">
        <Container>
          {children}
        </Container>
      </Section>
      {footer && <Block src={footer} />}
    </MDXProvider>
  </React.Fragment>
)
