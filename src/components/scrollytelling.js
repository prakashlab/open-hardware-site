import React, { PureComponent } from "react";
import { Container, Div, Grid, H1, P } from "@reflexjs/components"
import { Block } from "@reflexjs/gatsby-theme-block"
import { Image } from "@reflexjs/gatsby-plugin-image";
import styles from "./scrollytelling.module.css";

const content = {
  0: {
    child: (
      <Container px="3rem" py="3rem" bg="background">
        <H1>First</H1>
        <P>This is the first box!</P>
        <Image src="default.jpg" />
      </Container>
    ),
    background: "1.jpg",
    alt: "A fox"
  },
  1: {
    child: (
      <Container px="0" py="0">
        <Grid col="1|1|2">
          <Div px="3rem" py="3rem" bg="background">
            <H1>Second</H1>
            <P>Left Column!</P>
          </Div>
        </Grid>
      </Container>
    ),
    background: "2.jpg",
    alt: "A leopard"
  },
  2: {
    child: (
      <Container px="0" py="0">
        <Grid col="1|1|2">
          <Div></Div>
          <Div px="3rem" py="3rem" bg="background">
            <H1>Third</H1>
            <P>Right Column!</P>
          </Div>
        </Grid>
      </Container>
    ),
    background: "3.jpg",
    alt: "Some sheep"
  },
  3: {
    child: (
      <Container px="3rem" py="3rem" bg="background">
        <H1>Fourth</H1>
        <Block
          src="video-card"
          url="https://www.youtube-nocookie.com/embed/j0Eozd0CB1I"
        />
      </Container>
    ),
    background: "4.jpg",
    alt: "Some horses"
  },
  4: {
    child: (
      <Container px="3rem" py="3rem" bg="background">
        <H1>Fifth</H1>
        <P>This is the fifth box!</P>
      </Container>
    ),
    background: "5.jpg",
    alt: "Some zebras"
  },
  5: {
    child: (
      <Container px="3rem" py="3rem" bg="background">
        <H1>Sixth</H1>
        <P>This is the sixth box!</P>
      </Container>
    ),
    background: "6.jpg",
    alt: "A giraffe"
  },
  6: {
    child: (
      <Container px="3rem" py="3rem" bg="background">
        <H1>Seventh</H1>
        <P>This is the seventh box!</P>
      </Container>
    ),
    background: "7.jpg",
    alt: "A fox"
  },
  7: {
    child: (
      <Container px="3rem" py="3rem" bg="background">
        <H1>Eighth</H1>
        <P>This is the eighth box!</P>
      </Container>
    ),
    background: "8.jpg",
    alt: "A parrot"
  },
}

export default class Scrollytelling extends PureComponent {
  state = {
    data: 0,
    steps: Object.keys(content)
  };

  componentDidMount() {
    require('intersection-observer');
    const scrollama = require('scrollama');
    const scroller = scrollama();
    scroller.setup({
      step: '.' + styles.step,
      offset: 0.5,
      // debug: true
    });
    scroller.onStepEnter(this.onStepEnter);
    scroller.onStepExit(this.onStepExit);
    window.addEventListener('resize', scroller.resize);
  }

  onStepEnter = ({ index, direction }) => {
    console.log('enter', index)
    this.setState({ data: index });
  };

  onStepExit = ({ index, direction }) => {
    if (direction === 'up' && index === this.state.steps[0]) {
      this.setState({ data: 0 });
    }
  };

  render() {
    const { data, steps } = this.state;

    const active = data === undefined ? content[0] : content[data];
    return (
      <Div>
        <Div className={styles.graphicContainer}>
          <Div className={styles.graphic}>
            <img src={active.background} alt={active.alt} />
          </Div>
          <Div className={styles.scroller}>
            {steps.map(value => {
              return (
                <Div
                  className={styles.step} data={value} key={value}
                >
                  {content[value].child}
                </Div>
              );
            })}
          </Div>
        </Div>
      </Div>
    );
  }
}
