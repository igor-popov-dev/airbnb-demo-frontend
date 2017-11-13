import React from "react";
import { Row } from "../CommonStyles";
import { Grid, Col } from "react-flexbox-grid";
import { Right, Left, Slider, SliderContainer } from "../Slider/";
import SectionTitle from "../SectionTitle/";
import imageExample from "./imageExample.png";
import Card from "./Card";

const ArrowRight = Right.extend`top: 105px;`;
const ArrowLeft = Left.extend`top: 105px;`;

export default function() {
  return (
    <section>
      <Grid>
        <SectionTitle name="Popular reservations around the world" href="" />
        <SliderContainer>
          <ArrowRight />
          <ArrowLeft />
          <Slider>
            <Row>
              <Col xs={6} md={4} lg={3}>
                <Card imgSrc={imageExample} theme="Speakeasy" midCheck="60">
                  Chumley’s
                </Card>
              </Col>
              <Col xs={6} md={4} lg={3}>
                <Card
                  imgSrc={imageExample}
                  theme="Korean gastropub"
                  midCheck="50"
                >
                  Hanjan
                </Card>
              </Col>
              <Col xs={6} md={4} lg={3}>
                <Card
                  imgSrc={imageExample}
                  theme="German american"
                  midCheck="55"
                >
                  Prime Meats
                </Card>
              </Col>
              <Col xs={6} md={4} lg={3}>
                <Card imgSrc={imageExample} theme="Fine seafood" midCheck="70">
                  Seaprice
                </Card>
              </Col>
            </Row>
          </Slider>
        </SliderContainer>
      </Grid>
    </section>
  );
}
