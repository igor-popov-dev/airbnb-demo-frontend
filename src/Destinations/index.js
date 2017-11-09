import React from "react";
import styled from "styled-components";
import { Row, Title } from "../Explore/";
import { Slider, SliderControllerRight } from "../Experiences/";
import destinationExample from "./destinationImage.png";

const Col2 = styled.div`
  flex-basis: 16.66666667%;
  max-width: 16.66666667%;
  box-sizing: border-box;
  padding-right: 8px;
  padding-left: 8px;
`;
const CardItem = styled.a`
  text-decoration: none;
  color: #383838;
  cursor: pointer;
`;
const Image = styled.div`
  height: 220px;
  background: url(${destinationExample}) 50% 0 no-repeat;
  background-size: cover;
`;
const City = styled.h3`
  font-size: 15px;
  line-height: 18px;
  font-weight: bold;
  margin: 8px 0 0;
`;
const ArrowRight = SliderControllerRight.extend`top: 108px;`;

export default function() {
  return (
    <section>
      <div className="container">
        <Title>Featured destinations</Title>
        <Slider>
          <ArrowRight />
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
      </div>
    </section>
  );
}
