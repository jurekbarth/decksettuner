import React from "react";
import styled from "styled-components";
import { Headline, List, Item, Flex, Col, ScaledImage } from "./components";

export default class Slide5 extends React.Component {
  render() {
    return (
      <Flex>
        <Col>
          <Headline>InstaPy - Instagram Bot</Headline>
          <List>
            <Item>Instagram Growth</Item>
            <Item>Folgen/Entfolgen</Item>
            <Item>Liken / Disliken</Item>
          </List>
        </Col>
        <Col>
          <ScaledImage src="/instapy.png" />
        </Col>
      </Flex>
    );
  }
}
