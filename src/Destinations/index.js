import React from "react";
import styled from "styled-components";
import { Row, Title } from "../Explore/";
import {
  Slider,
  SliderControllerRight,
  SliderControllerLeft,
  SliderContainer
} from "../Experiences/";
import destinationExample from "./destinationImage.png";

const Col2 = styled.div`
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
const CardItem = styled.a`
  text-decoration: none;
  color: #383838;
  cursor: pointer;
`;
const Image = styled.div`
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
              <Col2>
                <CardItem>
                  <Image />
                  <City>Paris</City>
                </CardItem>
              </Col2>
              <Col2>
                <CardItem>
                  <Image />
                  <City>Miami</City>
                </CardItem>
              </Col2>
              <Col2>
                <CardItem>
                  <Image />
                  <City>Tokyo</City>
                </CardItem>
              </Col2>
              <Col2>
                <CardItem>
                  <Image />
                  <City>Cape town</City>
                </CardItem>
              </Col2>
              <Col2>
                <CardItem>
                  <Image />
                  <City>Seoul</City>
                </CardItem>
              </Col2>
              <Col2>
                <CardItem>
                  <Image />
                  <City>Los Angeles</City>
                </CardItem>
              </Col2>
            </Row>
          </Slider>
        </SliderContainer>
      </div>
    </section>
  );
}
