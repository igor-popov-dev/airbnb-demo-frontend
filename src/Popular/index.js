import React from "react";
import styled from "styled-components";
import { Row } from "../CommonStyles.js";
import { Col3 } from "../Experiences/";
import {
  SliderControllerRight,
  SliderControllerLeft,
  Slider,
  SliderContainer
} from "../Slider/";
import SectionTitle from "../SectionTitle/";
import imageExample from "./imageExample.png";

const Image = styled.div`
  height: 164px;
  background: url(${imageExample}) 50% 50% no-repeat;
  background-size: cover;
`;
const CardItem = styled.a`
  color: #383838;
  text-decoration: none;
  cursor: pointer;
`;
const Theme = styled.p`
  margin: 12px 0 2px;
  font-size: 10px;
  line-height: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;
const Name = styled.h3`
  margin: 0 0 4px;
  font-size: 18px;
`;
const Check = styled.p`
  font-weight: light;
  font-size: 18px;
  line-height: 21px;
  opacity: 0.9;
  margin: 0;
`;
const ArrowRight = SliderControllerRight.extend`top: 82px;`;
const ArrowLeft = SliderControllerLeft.extend`top: 82px;`;

export default function() {
  return (
    <section>
      <div className="container">
        <SectionTitle
          name="Popular reservations around the world"
          moreLink="ya.ru"
        />
        <SliderContainer>
          <ArrowRight />
          <ArrowLeft />
          <Slider>
            <Row>
              <Col3>
                <CardItem>
                  <Image />
                  <Theme>Speakeasy</Theme>
                  <Name>Chumley’s</Name>
                  <Check>About $60 per person</Check>
                </CardItem>
              </Col3>
              <Col3>
                <CardItem>
                  <Image />
                  <Theme>Korean gastropub</Theme>
                  <Name>Hanjan</Name>
                  <Check>About $50 per person</Check>
                </CardItem>
              </Col3>
              <Col3>
                <CardItem>
                  <Image />
                  <Theme>German american</Theme>
                  <Name>Prime Meats</Name>
                  <Check>About $55 per person</Check>
                </CardItem>
              </Col3>
              <Col3>
                <CardItem>
                  <Image />
                  <Theme>Fine seafood</Theme>
                  <Name>Seaprice</Name>
                  <Check>About $70 per person</Check>
                </CardItem>
              </Col3>
            </Row>
          </Slider>
        </SliderContainer>
      </div>
    </section>
  );
}
