import React from "react";
import styled from "styled-components";
import { Row, Title } from "../Explore/";
import imageExample from "./imageExample.png";
import star from "./star.svg";
import arrowRight from "./arrowRight.svg";

export const MoreLink = styled.a`
  text-decoration: none;
  float: right;
  line-height: 24px;
  font-size: 14px;
  font-weight: normal;
  color: #383838;
  margin-top: 5px;
`;
export const Col3 = styled.div`
  flex-basis: 25%;
  max-width: 25%;
  padding-right: 8px;
  padding-left: 8px;
  box-sizing: border-box;
`;
export const CardItem = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
const Image = styled.div`
  height: 346px;
  background: url(${imageExample}) 50% 50% no-repeat;
  background-size: cover;
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
export const Slider = styled.div`position: relative;`;
export const SliderControllerRight = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.16);
  position: absolute;
  right: -20px;
  top: 172px;
  margin-top: -20px;
  cursor: pointer;
  background: #fff url(${arrowRight}) 50% 50% no-repeat;
`;

export default function() {
  return (
    <section>
      <div className="container">
        <Title>
          Experiences
          <MoreLink href="">See all</MoreLink>
        </Title>
        <Slider>
          <SliderControllerRight />
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
      </div>
    </section>
  );
}
