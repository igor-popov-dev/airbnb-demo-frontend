import React from "react";
import styled from "styled-components";
import pictureExample from "./pictureExample.png";
import { Row, Title, Col4 } from "../CommonStyles.js";
import { Slider, SliderContainer } from "../Slider/";

const PartLink = styled.a`
  display: block;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 2px rgba(72, 72, 72, 0.08);
  border: 1px solid rgba(72, 72, 72, 0.2);
  overflow: hidden;
  @media (min-width: 768px) {
    height: 72px;
  }
`;
const PartName = styled.h2`
  margin: 0;
  line-height: 40px;
  font-size: 12px;
  text-align: center;
  @media (min-width: 768px) {
    line-height: 70px;
    font-size: 17px;
    padding-left: 120px;
    padding-right: 24px;
    text-align: left;
  }
`;
const Img = styled.img`
  width: 100%;
  @media (min-width: 768px) {
    float: left;
    width: 96px;
  }
`;

export default function() {
  return (
    <section>
      <div className="container">
        <Title>Explore Airbnb</Title>
        <SliderContainer>
          <Slider>
            <Row>
              <Col4>
                <PartLink>
                  <Img src={pictureExample} alt="" />
                  <PartName>Homes</PartName>
                </PartLink>
              </Col4>
              <Col4>
                <PartLink>
                  <Img src={pictureExample} alt="" />
                  <PartName>Experiences</PartName>
                </PartLink>
              </Col4>
              <Col4>
                <PartLink>
                  <Img src={pictureExample} alt="" />
                  <PartName>Restaurants</PartName>
                </PartLink>
              </Col4>
            </Row>
          </Slider>
        </SliderContainer>
      </div>
    </section>
  );
}
