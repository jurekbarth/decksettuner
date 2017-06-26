import React from "react";
import styled from "styled-components";
import { Headline, List, Item } from "./components";

export default class Slide1 extends React.Component {
  render() {
    return (
      <div>
        <Headline>Raspberry Pi Foundation</Headline>
        <List>
          <Item>gegründet 2009 in GB</Item>
          <Item>gemeinnützige Organisation</Item>
          <Item>Ziel: Förderung IT Studium</Item>
          <Item>Gründer sind Nerds aus der Industrie</Item>
          <Item>Tochtergesellschaft Raspberry Pi Trading</Item>
        </List>
      </div>
    );
  }
}
