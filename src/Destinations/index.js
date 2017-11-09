import React from "react";
import styled from "styled-components";
import { Row, Title } from "../CommonStyles.js";
import {
  Slider,
  SliderContainer,
  SliderControllerRight,
  SliderControllerLeft
} from "../Slider/";
import destinationExample from "./destinationImage.png";

const Col = styled.div`
  flex-basis: 33.3333%;
  max-width: 33.3333%;
  min-width: 33.3333%;
  box-sizing: border-box;
  padding-right: 8px;
  padding-left: 8px;
  @media (min-width: 768px) {
    flex-basis: 24.9999%;
    max-width: 24.9999%;
    min-width: 24.9999%;
  }
  @media (min-width: 1200px) {
    flex-basis: 16.66666667%;
    max-width: 16.66666667%;
    min-width: 16.66666667%;
  }
`;
const Card = styled.a`
  text-decoration: none;
  color: #383838;
  cursor: pointer;
`;
const ImgContainer = styled.div`
  height: 138px;
  background: url(${destinationExample}) 50% 0 no-repeat;
  background-size: cover;
  @media (min-width: 768px) {
    height: 264px;
  }
  @media (min-width: 1200px) {
    height: 220px;
  }
`;
const City = styled.h3`
  font-size: 15px;
  line-height: 18px;
  font-weight: bold;
  margin: 8px 0 0;
`;
const ArrowRight = SliderControllerRight.extend`top: 108px;`;
const ArrowLeft = SliderControllerLeft.extend`top: 108px;`;

export default function() {
  return (
    <section>
      <div className="container">
        <Title>Featured destinations</Title>
        <SliderContainer>
          <ArrowRight />
          <ArrowLeft />
          <Slider>
            <Row>
              <div className="col-lg-2 col-sm-3 col-xs-4">
                <Card>
                  <ImgContainer />
                  <City>Paris</City>
                </Card>
              </div>
              <div className="col-lg-2 col-sm-3 col-xs-4">
                <Card>
                  <ImgContainer />
                  <City>Miami</City>
                </Card>
              </div>
              <div className="col-lg-2 col-sm-3 col-xs-4">
                <Card>
                  <ImgContainer />
                  <City>Tokyo</City>
                </Card>
              </div>
              <div className="col-lg-2 col-sm-3 col-xs-4">
                <Card>
                  <ImgContainer />
                  <City>Cape town</City>
                </Card>
              </div>
              <div className="col-lg-2 col-sm-3 col-xs-4">
                <Card>
                  <ImgContainer />
                  <City>Seoul</City>
                </Card>
              </div>
              <div className="col-lg-2 col-sm-3 col-xs-4">
                <Card>
                  <ImgContainer />
                  <City>Los Angeles</City>
                </Card>
              </div>
            </Row>
          </Slider>
        </SliderContainer>
      </div>
    </section>
  );
}
