import React from "react";
import { Headline, List, Item } from "./components";

export default class Slide6 extends React.Component {
  render() {
    return (
      <div>
        <Headline>Bitcoin Mining</Headline>
        <List>
          <Item>Bitcoins errechnen</Item>
          <Item>Kosten &gt; Gewinn</Item>
          <Item>eignet sich nur für den Einstieg</Item>
        </List>
      </div>
    );
  }
}
