import React from "react";
import styled from "styled-components";
import { HeadlineSmall, Video, VideoWrapper } from "./components";

export default class Slide7 extends React.Component {
  render() {
    return (
      <div>
        <HeadlineSmall>IOT Senseo</HeadlineSmall>
        <VideoWrapper>
          <Video
            width="100%"
            src="https://www.youtube.com/embed/3E5JlUojAWI"
            frameborder="0"
            allowfullscreen
          />
        </VideoWrapper>
      </div>
    );
  }
}
