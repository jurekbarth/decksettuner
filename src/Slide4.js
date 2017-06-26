import React from "react";
import { Headline, List, Item } from "./components";

export default class Slide4 extends React.Component {
  render() {
    return (
      <div>
        <Headline>Use-Cases</Headline>
        <List>
          <Item>Micro Computing</Item>
          <Item>IOT Prototyping</Item>
          <Item>Lehre / Studium</Item>
        </List>
      </div>
    );
  }
}
