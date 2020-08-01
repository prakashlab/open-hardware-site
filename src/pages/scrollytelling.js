import * as React from "react"
import { Block } from "@reflexjs/gatsby-theme-block"
import { Metatags } from "@reflexjs/gatsby-plugin-metatags"
import Loadable from "@loadable/component"

const LoadableScrollytelling = Loadable(() => import("../components/scrollytelling"))
const LoadableDynamicHeader = Loadable(() => import("../components/dynamicHeader"))

const ScrollyPage = ({ data }) => (
  <React.Fragment>
    <Metatags pathname="/notion" />
    <LoadableDynamicHeader />
    <LoadableScrollytelling />
    <Block src="footer" />
  </React.Fragment>
)

export default ScrollyPage;
