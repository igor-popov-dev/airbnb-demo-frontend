import React from "react";
import styled from "styled-components";
import { Row, Card, Place, Price, ReviewsNum, Image } from "../CommonStyles";
import Stars from "../Stars/";
import { Slider, SliderContainer, Right, Left } from "../Slider/";
import SectionTitle from "../SectionTitle/";
import imageExample from "./imageExample.png";
import { Grid, Col } from "react-flexbox-grid";

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
  font-weight: light;
`;
const ArrowRight = Right.extend`top: 130px;`;
const ArrowLeft = Left.extend`top: 130px;`;

export default function() {
  return (
    <section>
      <Grid>
        <SectionTitle name="Homes" href="" />
        <SliderContainer>
          <ArrowRight />
          <ArrowLeft />
          <Slider>
            <Row>
              <Col xs={6} md={5} lg={4}>
                <Card>
                  <Image src={imageExample} />
                  <HomeInfo>
                    <Price>$82</Price>
                    La Salentina, see, nature & relax
                  </HomeInfo>
                  <Notice>Entrie house · 9 beds</Notice>
                  <ReviewsNum>
                    <Stars />
                    97 · Superhost
                  </ReviewsNum>
                </Card>
              </Col>
              <Col xs={6} md={5} lg={4}>
                <Card>
                  <Image src={imageExample} />
                  <HomeInfo>
                    <Price>$82</Price>
                    Your private 3 bedr.riad and exclusi...
                  </HomeInfo>
                  <Notice>Entrie house · 4 beds</Notice>
                  <ReviewsNum>
                    <Stars />
                    161 · Superhost
                  </ReviewsNum>
                </Card>
              </Col>
              <Col xs={6} md={5} lg={4}>
                <Card>
                  <Image src={imageExample} />
                  <HomeInfo>
                    <Price>$200</Price>
                    Dreamy Tropical Tree House
                  </HomeInfo>
                  <Notice>Entrie house · 1 beds</Notice>
                  <ReviewsNum>
                    <Stars />
                    364 · Superhost
                  </ReviewsNum>
                </Card>
              </Col>
            </Row>
          </Slider>
        </SliderContainer>
      </Grid>
    </section>
  );
}
