import React from "react";
import { Row } from "../CommonStyles";
import { Slider, SliderContainer, Right, Left } from "../Slider/";
import SectionTitle from "../SectionTitle/";
import imageExample from "./imageExample.png";
import { Grid, Col } from "react-flexbox-grid";
import Card from "./Card";

export default function() {
  return (
    <section>
      <Grid>
        <SectionTitle name="Experiences" href="" />
        <SliderContainer>
          <Right />
          <Left />
          <Slider>
            <Row>
              <Col xs={6} md={4} lg={3}>
                <Card href="" imgSrc={imageExample} price="65" reviews="44">
                  Forest therapy
                </Card>
              </Col>
              <Col xs={6} md={4} lg={3}>
                <Card href="" imgSrc={imageExample} price="69" reviews="46">
                  Whale watching
                </Card>
              </Col>
              <Col xs={6} md={4} lg={3}>
                <Card href="" imgSrc={imageExample} price="69" reviews="44">
                  Table Mountain Summit,<br /> Cable Car Down
                </Card>
              </Col>
              <Col xs={6} md={4} lg={3}>
                <Card href="" imgSrc={imageExample} price="50" reviews="64">
                  Salsa Night
                </Card>
              </Col>
            </Row>
          </Slider>
        </SliderContainer>
      </Grid>
    </section>
  );
}
