import React from "react";
import { Row, Title } from "../CommonStyles";
import { Grid, Col } from "react-flexbox-grid";
import { Slider, SliderContainer, Right, Left } from "../Slider/";
import destinationExample from "./destinationImage.png";
import Card from "./Card";

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
                <Card imgSrc={destinationExample}>Paris</Card>
              </Col>
              <Col xs={4} md={3} lg={2}>
                <Card imgSrc={destinationExample}>Miami</Card>
              </Col>
              <Col xs={4} md={3} lg={2}>
                <Card imgSrc={destinationExample}>Tokyo</Card>
              </Col>
              <Col xs={4} md={3} lg={2}>
                <Card imgSrc={destinationExample}>Cape town</Card>
              </Col>
              <Col xs={4} md={3} lg={2}>
                <Card imgSrc={destinationExample}>Seoul</Card>
              </Col>
              <Col xs={4} md={3} lg={2}>
                <Card imgSrc={destinationExample}>Los Angeles</Card>
              </Col>
            </Row>
          </Slider>
        </SliderContainer>
      </Grid>
    </section>
  );
}
