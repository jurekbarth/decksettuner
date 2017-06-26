import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import base from "./base";

import styled, { ThemeProvider } from "styled-components";

import Slide0 from "./Slide0";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
import Slide6 from "./Slide6";
import Slide7 from "./Slide7";
import Slide8 from "./Slide8";
import Slide9 from "./Slide9";
import Slide10 from "./Slide10";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 0,
      colors: {}
    };
  }
  handleKeyDown(e) {
    const keycode = e.keyCode;
    if (keycode === 39) {
      this.setState({ slide: this.state.slide + 1 });
    } else if (keycode === 37) {
      this.setState({ slide: this.state.slide - 1 });
    }
  }
  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
    this.ref = base.syncState(`colors`, {
      context: this,
      state: "colors"
    });
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown.bind(this));
    base.removeBinding(this.ref);
  }
  renderSlides() {
    const slide = this.state.slide;
    switch (slide) {
      case 0:
        return <Slide0 />;
      case 1:
        return <Slide1 />;
      case 2:
        return <Slide2 />;
      case 3:
        return <Slide3 />;
      case 4:
        return <Slide4 />;
      case 5:
        return <Slide5 />;
      case 6:
        return <Slide6 />;
      case 7:
        return <Slide7 />;
      case 8:
        return <Slide8 />;
      case 9:
        return <Slide9 />;
      case 10:
        return <Slide10 />;
      default:
        return <p>Error</p>;
    }
  }
  render() {
    const slide = this.state.slide;
    const {
      background = [970, 970, 970],
      color = [970, 970, 970]
    } = this.state.colors;
    const bg = background.map(a => {
      let temp = Math.floor(0.26 * a);
      if (temp > 255) {
        temp = 255;
      }
      if (temp < 0) {
        temp = 0;
      }
      return temp;
    });
    const c = color.map(a => {
      let ta = 970 - a;
      if (ta < 0) {
        ta = ta * -1;
      }
      let temp = Math.floor(0.26 * ta);
      if (temp > 255) {
        temp = 255;
      }
      if (temp < 0) {
        temp = 0;
      }
      return temp;
    });
    console.log(c);
    const theme = {
      bgc: `rgb(${bg[0]}, ${bg[1]}, ${bg[2]})`,
      cf: `rgb(${c[0]}, ${c[1]}, ${c[2]})`
    };
    return (
      <ThemeProvider theme={theme}>
        <StyledApp>{this.renderSlides()}</StyledApp>
      </ThemeProvider>
    );
  }
}

const StyledApp = styled.div`
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  width: 100vw;
  height: 100vh;
  padding: 3em;
  background-color: ${props => props.theme.bgc};
  color: ${props => props.theme.cf};
`;

export default App;
