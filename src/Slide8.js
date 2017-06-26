import React from "react";
import styled from "styled-components";
import { HeadlineSmall, Video, VideoWrapper } from "./components";

export default class Slide8 extends React.Component {
  render() {
    return (
      <div>
        <HeadlineSmall>IOT Bierkühlschrank</HeadlineSmall>
        <VideoWrapper>
          <Video
            width="100%"
            src="https://www.youtube.com/embed/2YU_OdLMAVI"
            frameborder="0"
            allowfullscreen
          />
        </VideoWrapper>
      </div>
    );
  }
}
