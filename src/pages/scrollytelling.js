import * as React from "react"
import { Container } from "@reflexjs/components"
import { Block } from "@reflexjs/gatsby-theme-block"
import { Metatags } from "@reflexjs/gatsby-plugin-metatags"
import Loadable from "@loadable/component"

const LoadableScrollytelling = Loadable(() => import("../components/scrollytelling"))

const ScrollyPage = ({ data }) => (
  <React.Fragment>
    <Metatags pathname="/notion" />
    <Block src="header" />
    <LoadableScrollytelling />
    <Block src="footer" />
  </React.Fragment>
)

export default ScrollyPage;
