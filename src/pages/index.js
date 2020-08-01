import * as React from "react"
import { Block } from "@reflexjs/gatsby-theme-block"
import { Metatags } from "@reflexjs/gatsby-plugin-metatags"
import Scrollytelling from "../components/scrollytelling"
import Loadable from "@loadable/component"

const LoadableDynamicHeader = Loadable(() => import("../components/dynamicHeader"))

const ScrollyPage = ({ data }) => (
  <React.Fragment>
    <Metatags pathname="/notion" />
    <LoadableDynamicHeader />
    <Scrollytelling />
    <Block src="footer" />
  </React.Fragment>
)

export default ScrollyPage;
