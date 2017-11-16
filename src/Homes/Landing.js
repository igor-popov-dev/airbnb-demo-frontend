import React from "react";
import { Row } from "../CommonStyles";
import { Slider, SliderContainer, Right, Left } from "../Slider/";
import SectionTitle from "../SectionTitle/";
import imageExample from "./imageExample.png";
import { Grid, Col } from "react-flexbox-grid";
import Card from "./Card";

const ArrowRight = Right.extend`top: 130px;`;
const ArrowLeft = Left.extend`top: 130px;`;

export default function() {
  return (
    <section>
      <Grid>
        <SectionTitle name="Homes" href="/homes" />
        <SliderContainer>
          <ArrowRight />
          <ArrowLeft />
          <Slider>
            <Row>
              <Col xs={6} md={5} lg={4}>
                <Card
                  imgSrc={imageExample}
                  price="82"
                  beds="9 beds"
                  superhost="97"
                >
                  La Salentina, see, nature & relax
                </Card>
              </Col>
              <Col xs={6} md={5} lg={4}>
                <Card
                  imgSrc={imageExample}
                  price="82"
                  beds="4 beds"
                  superhost="161"
                >
                  Your private 3 bedr.riad and exclusi...
                </Card>
              </Col>
              <Col xs={6} md={5} lg={4}>
                <Card
                  imgSrc={imageExample}
                  price="200"
                  beds="1 bed"
                  superhost="364"
                >
                  Dreamy Tropical Tree House
                </Card>
              </Col>
            </Row>
          </Slider>
        </SliderContainer>
      </Grid>
    </section>
  );
}
