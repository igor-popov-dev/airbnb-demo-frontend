import React from "react";
import styled from "styled-components";
import pictureExample from "./pictureExample.png";
import { Slider, SliderContainer } from "../Experiences/";

export const Title = styled.h2`
  font-size: 24px;
  line-height: 1.4;
  margin: 39px 0 16px;
  font-weight: bold;
  position: relative;
  padding-left: 8px;
  padding-right: 60px;
  position: relative;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 34px;
    margin: 48px 0 24px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
export const Col4 = styled.div`
  flex-basis: 50%;
  max-width: 50%;
  min-width: 50%;
  padding-right: 8px;
  padding-left: 8px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
    min-width: 304px;
  }
  @media (min-width: 1200px) {
    min-width: auto;
  }
`;

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
