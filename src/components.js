import styled from "styled-components";

export const Headline = styled.h1`
  text-transform: uppercase;
  font-size: 6vw;
  margin-top: 0;
`;

export const HeadlineSmall = styled.h1`
  text-transform: uppercase;
  font-size: 4vw;
  margin-top: 0;
`;

export const List = styled.ul`
  font-size: 3vw;
  line-height: 1.5em;
  list-style-type: none;
  margin: 0;
`;

export const Item = styled.li`
  position: relative;
  &:before {
    content: "»";
    position: absolute;
    left: -1em;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: stretch;
`;

export const Col = styled.div`
  flex: 1 1 50%;
  &:first-of-type {
    margin-right: 1em;
  }
  &:last-of-type {
    margin-left: 1em;
  }
`;

export const ScaledImage = styled.img`
  max-width: 45vw;
  max-height: 90vh;
  object-fit: scale-down;
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 65vw;
  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: 56.25%;
  }
`;

export const Video = styled.iframe`
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
	height: 100%;
`;
