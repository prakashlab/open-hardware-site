import React from "react";
import { Container, Div, Grid, H1, P, Section } from "@reflexjs/components"
import { Block } from "@reflexjs/gatsby-theme-block"
import { Image } from "@reflexjs/gatsby-plugin-image";
import styles from "./scrollytelling.module.css";

const sections = {
  0: {
    child: (
      <Container px="3rem" py="3rem" bg="background">
        <H1>First</H1>
        <P>This is the first box!</P>
        <Image src="default.jpg" />
      </Container>
    ),
    background: "scrollytelling/1.jpg",
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
    background: "scrollytelling/2.jpg",
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
    background: "scrollytelling/3.jpg",
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
    background: "scrollytelling/4.jpg",
    alt: "Some horses"
  },
  4: {
    child: (
      <Div>
        <H1>Fifth</H1>
        <P>This is the fifth box!</P>
      </Div>
    ),
    background: "scrollytelling/5.jpg",
    alt: "Some zebras"
  },
  5: {
    child: (
      <Div px="3rem" py="3rem" bg="background">
        <H1>Sixth</H1>
        <P>This is the sixth box!</P>
      </Div>
    ),
    background: "scrollytelling/6.jpg",
    alt: "A giraffe"
  },
  6: {
    child: (
      <Container px="3rem" py="3rem" bg="background">
        <H1>Seventh</H1>
        <P>This is the seventh box!</P>
      </Container>
    ),
    background: "scrollytelling/7.jpg",
    alt: "A fox"
  },
  7: {
    child: (
      <Div px="3rem" py="3rem">
        <Grid col="1|1|2">
          <Div></Div>
          <Div px="3rem" py="3rem" bg="background">
            <H1>Eighth</H1>
            <P>Far right Column!</P>
          </Div>
        </Grid>
      </Div>
    ),
    background: "scrollytelling/8.jpg",
    alt: "A parrot"
  },
}

const Scrollytelling = () => (
  <React.Fragment>
    {Object.entries(sections).map(([key, value]) => {
      return (
        <Section key={key}>
          <Image
            className={styles.graphic} src={value.background} alt={value.alt}
          />
          <Div className={styles.content}>
            {value.child}
          </Div>
        </Section>
      );
    })}
  </React.Fragment>
);

export default Scrollytelling;
