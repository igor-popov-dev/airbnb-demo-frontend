import React from "react";
import styled from "styled-components";
import { Row, Title } from "../Explore/";
import imageExample from "./imageExample.png";
import star from "./star.svg";
import arrowRight from "./arrowRight.svg";
import moreArrow from "./moreArrow.svg";

export const MoreLink = styled.a`
  text-decoration: none;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -12px;
  line-height: 24px;
  font-size: 14px;
  font-weight: normal;
  color: #383838;
  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 10px;
    display: inline-block;
    margin-left: 8px;
    background: url(${moreArrow}) 50% 50% no-repeat;
  }
`;
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
export const CardItem = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
const Image = styled.div`
  height: 216px;
  background: url(${imageExample}) 50% 50% no-repeat;
  background-size: cover;
  @media (min-width: 1200px) {
    height: 346px;
  }
`;
export const Place = styled.h3`
  font-size: 15px;
  line-height: 18px;
  color: #383838;
  font-weight: normal;
  margin-top: 8px;
  margin-bottom: 6px;
  font-weigt: 300;
`;

export const Price = styled.span`
  font-weight: bold;
  display: inline-block;
  margin-right: 4px;
`;
export const ReviewsNum = styled.p`
  font-size: 12px;
  line-height: 14px;
  margin: 0;
  color: #383838;
`;
export const StarsContainer = styled.span`
  display: inline-block;
  font-size: 0;
  margin-right: 8px;
`;
export const StarItem = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  background: url(${star}) 50% 50% no-repeat;
  margin-right: 4px;
`;
export const Slider = styled.div`
  position: relative;
  overflow-x: auto;
`;
export const SliderControllerRight = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.16);
  position: absolute;
  right: -10px;
  top: 172px;
  margin-top: -20px;
  cursor: pointer;
  background: #fff url(${arrowRight}) 50% 50% no-repeat;
  z-index: 10;
  display: none;
  @media (min-width: 1200px) {
    display: block;
  }
`;
export const SliderControllerLeft = SliderControllerRight.extend`
  right: auto;
  left: -10px;
  transform: rotate(180deg);
`;
export const SliderContainer = styled.div`position: relative;`;

export default function() {
  return (
    <section>
      <div className="container">
        <Title>
          Experiences
          <MoreLink href="">See all</MoreLink>
        </Title>
        <SliderContainer>
          <SliderControllerRight />
          <SliderControllerLeft />
          <Slider>
            <Row>
              <Col3>
                <CardItem href="">
                  <Image />
                  <Place>
                    <Price>$29</Price>
                    Forest therapy
                  </Place>
                  <ReviewsNum>
                    <StarsContainer>
                      <StarItem />
                      <StarItem />
                      <StarItem />
                      <StarItem />
                      <StarItem />
                    </StarsContainer>
                    44 reviews
                  </ReviewsNum>
                </CardItem>
              </Col3>
              <Col3>
                <CardItem href="">
                  <Image />
                  <Place>
                    <Price>$69</Price>
                    Whale watching
                  </Place>
                  <ReviewsNum>
                    <StarsContainer>
                      <StarItem />
                      <StarItem />
                      <StarItem />
                      <StarItem />
                      <StarItem />
                    </StarsContainer>
                    46 reviews
                  </ReviewsNum>
                </CardItem>
              </Col3>
              <Col3>
                <CardItem href="">
                  <Image />
                  <Place>
                    <Price>$69</Price>
                    Table Mountain Summit,<br /> Cable Car Down
                  </Place>
                  <ReviewsNum>
                    <StarsContainer>
                      <StarItem />
                      <StarItem />
                      <StarItem />
                      <StarItem />
                      <StarItem />
                    </StarsContainer>
                    44 reviews
                  </ReviewsNum>
                </CardItem>
              </Col3>
              <Col3>
                <CardItem href="">
                  <Image />
                  <Place>
                    <Price>$50</Price>
                    Salsa Night
                  </Place>
                  <ReviewsNum>
                    <StarsContainer>
                      <StarItem />
                      <StarItem />
                      <StarItem />
                      <StarItem />
                      <StarItem />
                    </StarsContainer>
                    64 reviews
                  </ReviewsNum>
                </CardItem>
              </Col3>
            </Row>
          </Slider>
        </SliderContainer>
      </div>
    </section>
  );
}
