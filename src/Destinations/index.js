import React from "react";
import styled from "styled-components";
import { Row, Title, Image } from "../CommonStyles.js";
import { Grid, Col } from "react-flexbox-grid";
import { Slider, SliderContainer, Right, Left } from "../Slider/";
import destinationExample from "./destinationImage.png";

const Card = styled.a`
  text-decoration: none;
  color: #383838;
  cursor: pointer;
`;
const ImgContainer = styled.div`
  height: 138px;
  background: url(${destinationExample}) 50% 0 no-repeat;
  background-size: cover;
  @media (min-width: 768px) {
    height: 264px;
  }
  @media (min-width: 1200px) {
    height: 220px;
  }
`;
const City = styled.h3`
  font-size: 15px;
  line-height: 18px;
  font-weight: bold;
  margin: 8px 0 0;
`;
const ArrowRight = Right.extend`top: 140px;`;
const ArrowLeft = Left.extend`top: 140px;`;

export default function() {
  return (
    <section>
      <Grid>
        <Title>Featured destinations</Title>
        <SliderContainer>
          <ArrowRight />
          <ArrowLeft />
          <Slider>
            <Row>
              <Col xs={4} md={3} lg={2}>
                <Card>
                  <Image src={destinationExample} />
                  <City>Paris</City>
                </Card>
              </Col>
              <Col xs={4} md={3} lg={2}>
                <Card>
                  <Image src={destinationExample} />
                  <City>Miami</City>
                </Card>
              </Col>
              <Col xs={4} md={3} lg={2}>
                <Card>
                  <Image src={destinationExample} />
                  <City>Tokyo</City>
                </Card>
              </Col>
              <Col xs={4} md={3} lg={2}>
                <Card>
                  <Image src={destinationExample} />
                  <City>Cape town</City>
                </Card>
              </Col>
              <Col xs={4} md={3} lg={2}>
                <Card>
                  <Image src={destinationExample} />
                  <City>Seoul</City>
                </Card>
              </Col>
              <Col xs={4} md={3} lg={2}>
                <Card>
                  <Image src={destinationExample} />
                  <City>Los Angeles</City>
                </Card>
              </Col>
            </Row>
          </Slider>
        </SliderContainer>
      </Grid>
    </section>
  );
}
