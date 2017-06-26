import React from "react";
import styled from "styled-components";
import { Headline, List, Item, Flex, Col, ScaledImage } from "./components";

export default class Slide3 extends React.Component {
  render() {
    return (
      <Flex>
        <Col>
          <Headline>Raspberry Pi Zero</Headline>
          <List>
            <Item>kleiner ca. 3cm breit</Item>
            <Item>günstiger ca. 5-10€</Item>
            <Item>weniger Leistung</Item>
          </List>
        </Col>
        <Col>
          <ScaledImage src="/zero.jpg" />
        </Col>
      </Flex>
    );
  }
}
