import React, { PureComponent } from "react";
import { Div } from "@reflexjs/components"
import { Block } from "@reflexjs/gatsby-theme-block"

export default class DynamicHeader extends PureComponent {
  state = {
    alpha: 0.0
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const transitionStart = 200;
      const transitionEnd = window.innerHeight / 2;
      const startAlpha = 0;
      const endAlpha = 0.9;
      this.setState({
        alpha: Math.min(endAlpha, Math.max(
          startAlpha, window.scrollY - transitionStart
        ) / transitionEnd)
      });
    });
  }

  render() {
    const { alpha } = this.state;
    const background = `rgba(25, 25, 36, ${alpha})`;
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
