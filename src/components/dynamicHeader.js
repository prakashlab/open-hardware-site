import React, { PureComponent } from "react";
import { Div } from "@reflexjs/components"
import { Block } from "@reflexjs/gatsby-theme-block"

export default class DynamicHeader extends PureComponent {
  state = {
    top: true
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      this.setState({top: window.scrollY < 200});
    });
  }

  render() {
    const { top } = this.state;
    const background = top ? "transparent" : "background";
    return (
      <Div position="relative">
        <Block
          src="header"
          position="fixed" width="100%" bg={"background|" + background}
        />
      </Div>
    )
  }
}
