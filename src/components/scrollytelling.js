import React, { PureComponent } from "react";
import styles from "./scrollytelling.module.css";

import background1 from "../../content/images/scrollytelling/1.jpg"
import background2 from "../../content/images/scrollytelling/2.jpg"
import background3 from "../../content/images/scrollytelling/3.jpg"
import background4 from "../../content/images/scrollytelling/4.jpg"
import background5 from "../../content/images/scrollytelling/5.jpg"
import background6 from "../../content/images/scrollytelling/6.jpg"
import background7 from "../../content/images/scrollytelling/7.jpg"
import background8 from "../../content/images/scrollytelling/8.jpg"

const content = {
  0: {
    text: 'This is the first box!',
    background: background1,
  },
  1: {
    text: 'This is the second box!',
    background: background2,
  },
  2: {
    text: 'This is the third box!',
    background: background3
  },
  3: {
    text: 'This is the fourth box!',
    background: background4
  },
  4: {
    text: 'This is the fifth box!',
    background: background5
  },
  5: {
    text: 'This is the sixth box!',
    background: background6
  },
  6: {
    text: 'This is the seventh box!',
    background: background7
  },
  7: {
    text: 'This is the eighth box!',
    background: background8
  },
}

export default class Scrollytelling extends PureComponent {
  state = {
    data: 0,
    steps: [0, 1, 2, 3, 4, 5, 6, 7],
  };

  componentDidMount() {
    require('intersection-observer');
    const scrollama = require('scrollama');
    const scroller = scrollama();
    scroller.setup({
      step: '.' + styles.step,
      offset: 0.4,
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
    const { data, steps, /*progress*/ } = this.state;

    const backgroundImage = data === undefined
      ?  content[0].background : content[data].background;
    return (
      <div>
        <p className={styles.pageSubtitle}>Scroll ↓</p>
        <div className={styles.graphicContainer}>
          <div className={styles.scroller}>
            {steps.map(value => {
              return (
                <div
                  className={styles.step} data={value} key={value}
                  style={{ background: 'white' }}
                >
                  <p>{content[value].text}</p>
                </div>
              );
            })}
          </div>
          <div
            className={styles.graphic}
            style={{backgroundImage: 'url(' + backgroundImage + ')'}} 
          ></div>
        </div>
      </div>
    );
  }
}
