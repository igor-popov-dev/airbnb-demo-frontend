import React from "react";
import styled from "styled-components";
import { Row, Title, Col4 } from "../Explore/";
import star from "../Experiences/star.svg";
import {
  MoreLink,
  Slider,
  SliderControllerRight,
  Place,
  Price,
  StarsContainer,
  StarItem,
  ReviewsNum,
  CardItem
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
const ArrowRight = SliderControllerRight.extend`top: 104px;`;

export default function() {
  return (
    <section>
      <div className="container">
        <Title>
          Homes
          <MoreLink href="">See all</MoreLink>
        </Title>
        <Slider>
          <ArrowRight />
          <Row>
            <Col4>
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
            </Col4>
            <Col4>
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
            </Col4>
            <Col4>
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
            </Col4>
          </Row>
        </Slider>
      </div>
    </section>
  );
}
