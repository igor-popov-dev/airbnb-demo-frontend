import React from "react";
import styled from "styled-components";
import { Row, Card, Place, Price, ReviewsNum } from "../CommonStyles.js";
import {
  Slider,
  SliderContainer,
  SliderControllerRight,
  SliderControllerLeft
} from "../Slider/";
import SectionTitle from "../SectionTitle/";
import imageExample from "./imageExample.png";
import Stars from "../Stars/";

export const Col3 = styled.div`
  flex-basis: 50%;
  max-width: 50%;
  min-width: 50%;
  padding-right: 8px;
  padding-left: 8px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    flex-basis: 33.3333%;
    max-width: 33.3333%;
    min-width: 33.3333%;
  }
  @media (min-width: 1200px) {
    flex-basis: 25%;
    max-width: 25%;
    min-width: 25%;
  }
`;
const Image = styled.div`
  height: 216px;
  background: url(${imageExample}) 50% 50% no-repeat;
  background-size: cover;
  @media (min-width: 1200px) {
    height: 346px;
  }
`;

export default function() {
  return (
    <section>
      <div className="container">
        <SectionTitle name="Experiences" moreLink="ya.ru" />
        <SliderContainer>
          <SliderControllerRight />
          <SliderControllerLeft />
          <Slider>
            <Row>
              <Col3>
                <Card href="">
                  <Image />
                  <Place>
                    <Price>$29</Price>
                    Forest therapy
                  </Place>
                  <ReviewsNum>
                    <Stars />
                    44 reviews
                  </ReviewsNum>
                </Card>
              </Col3>
              <Col3>
                <Card href="">
                  <Image />
                  <Place>
                    <Price>$69</Price>
                    Whale watching
                  </Place>
                  <ReviewsNum>
                    <Stars />
                    46 reviews
                  </ReviewsNum>
                </Card>
              </Col3>
              <Col3>
                <Card href="">
                  <Image />
                  <Place>
                    <Price>$69</Price>
                    Table Mountain Summit,<br /> Cable Car Down
                  </Place>
                  <ReviewsNum>
                    <Stars />
                    44 reviews
                  </ReviewsNum>
                </Card>
              </Col3>
              <Col3>
                <Card href="">
                  <Image />
                  <Place>
                    <Price>$50</Price>
                    Salsa Night
                  </Place>
                  <ReviewsNum>
                    <Stars />
                    64 reviews
                  </ReviewsNum>
                </Card>
              </Col3>
            </Row>
          </Slider>
        </SliderContainer>
      </div>
    </section>
  );
}
