import React from "react";
import styled from "styled-components";
import { Headline } from "./components";

export default class Slide0 extends React.Component {
  render() {
    return (
      <div>
        <Headline>Raspberry Pi</Headline>
        <Wrapper>
          <FullImage src="/raspberrypi.png" />
        </Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FullImage = styled.img`
  height: 60vh;
`;
