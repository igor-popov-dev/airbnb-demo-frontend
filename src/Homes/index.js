import React from "react";
import styled from "styled-components";
import { Row, Title, Col4 } from "../Explore/";
import star from "../Experiences/star.svg";
import {
  MoreLink,
  Slider,
  SliderControllerRight,
  SliderControllerLeft,
  Place,
  Price,
  StarsContainer,
  StarItem,
  ReviewsNum,
  CardItem,
  SliderContainer
} from "../Experiences/";
import imageExample from "./imageExample.png";

const Image = styled.div`
  height: 204px;
  background: url(${imageExample}) 50% 50% no-repeat;
  background-size: cover;
`;
const HomeInfo = Place.extend`
  font-weight: bold;
  margin-bottom: 2px;
`;
const Notice = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 18px;
  color: #383838;
  margin-top: 2px;
  margin-bottom: 8px;
  font-weight: 300;
`;
const Col = Col4.extend`
  min-width: 197px;
  @media (min-width: 768px) {
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
    min-width: 304px;
  }
  @media (min-width: 1200px) {
    min-width: auto;
  }
`;
const ArrowRight = SliderControllerRight.extend`top: 104px;`;
const ArrowLeft = SliderControllerLeft.extend`top: 104px;`;

export default function() {
  return (
    <section>
      <div className="container">
        <Title>
          Homes
          <MoreLink href="">See all</MoreLink>
        </Title>
        <SliderContainer>
          <ArrowRight />
          <ArrowLeft />
          <Slider>
            <Row>
              <Col>
                <CardItem>
                  <Image />
                  <HomeInfo>
                    <Price>$82</Price>
                    La Salentina, see, nature & relax
                  </HomeInfo>
                  <Notice>Entrie house · 9 beds</Notice>
                  <ReviewsNum>
                    <StarsContainer>
                      <StarItem />
                      <StarItem />
                      <StarItem />
                      <StarItem />
                      <StarItem />
                    </StarsContainer>
                    97 · Superhost
                  </ReviewsNum>
                </CardItem>
              </Col>
              <Col>
                <CardItem>
                  <Image />
                  <HomeInfo>
                    <Price>$82</Price>
                    Your private 3 bedr.riad and exclusi...
                  </HomeInfo>
                  <Notice>Entrie house · 4 beds</Notice>
                  <ReviewsNum>
                    <StarsContainer>
                      <StarItem />
                      <StarItem />
                      <StarItem />
                      <StarItem />
                      <StarItem />
                    </StarsContainer>
                    161 · Superhost
                  </ReviewsNum>
                </CardItem>
              </Col>
              <Col>
                <CardItem>
                  <Image />
                  <HomeInfo>
                    <Price>$200</Price>
                    Dreamy Tropical Tree House
                  </HomeInfo>
                  <Notice>Entrie house · 1 beds</Notice>
                  <ReviewsNum>
                    <StarsContainer>
                      <StarItem />
                      <StarItem />
                      <StarItem />
                      <StarItem />
                      <StarItem />
                    </StarsContainer>
                    364 · Superhost
                  </ReviewsNum>
                </CardItem>
              </Col>
            </Row>
          </Slider>
        </SliderContainer>
      </div>
    </section>
  );
}
