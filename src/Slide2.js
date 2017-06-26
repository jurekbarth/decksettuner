import React from "react";
import styled from "styled-components";
import { Headline, List, Item, Flex, Col, ScaledImage } from "./components";

export default class Slide2 extends React.Component {
  render() {
    return (
      <Flex>
        <Col>
          <Headline>Raspberry Pi Model 1-3</Headline>
          <List>
            <Item>kleiner Computer</Item>
            <Item>USB, WLAN, HDMI, Audio Schnittstellen</Item>
            <Item>Serielle Schnittstellen für Kamera oder Leds</Item>
            <Item>Windows 10 IOT ab Pi 2 Model B</Item>
          </List>
        </Col>
        <Col>
          <ScaledImage src="/pi.jpg" />
        </Col>
      </Flex>
    );
  }
}
