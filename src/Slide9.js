import React from "react";
import styled from "styled-components";
import { Headline, List, Item, Flex, Col, ScaledImage } from "./components";

export default class Slide09 extends React.Component {
  render() {
    return (
      <Flex>
        <Col>
          <Headline>Decktuner</Headline>
          <List>
            <Item>Raspberry Pi sendet Daten an Firebase</Item>
            <Item>Potentionmeter erstellen Widerstand</Item>
            <Item>MCP3008 wandelt Analog Singal in Digital Signal</Item>
            <Item>Präsentation "hört" auf Änderungen</Item>
          </List>
        </Col>
        <Col>
          <ScaledImage src="/demo.jpg" />
        </Col>
      </Flex>
    );
  }
}
