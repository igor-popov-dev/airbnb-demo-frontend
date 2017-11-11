import React from "react";
import { Card, Row, Place, Price, ReviewsNum, Image } from "../CommonStyles";
import { Slider, SliderContainer, Right, Left } from "../Slider/";
import SectionTitle from "../SectionTitle/";
import imageExample from "./imageExample.png";
import Stars from "../Stars/";
import { Grid, Col } from "react-flexbox-grid";

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
                <Card href="">
                  <Image src={imageExample} />
                  <Place>
                    <Price>$29</Price>
                    Forest therapy
                  </Place>
                  <ReviewsNum>
                    <Stars />
                    44 reviews
                  </ReviewsNum>
                </Card>
              </Col>
              <Col xs={6} md={4} lg={3}>
                <Card href="">
                  <Image src={imageExample} />
                  <Place>
                    <Price>$69</Price>
                    Whale watching
                  </Place>
                  <ReviewsNum>
                    <Stars />
                    46 reviews
                  </ReviewsNum>
                </Card>
              </Col>
              <Col xs={6} md={4} lg={3}>
                <Card href="">
                  <Image src={imageExample} />
                  <Place>
                    <Price>$69</Price>
                    Table Mountain Summit,<br /> Cable Car Down
                  </Place>
                  <ReviewsNum>
                    <Stars />
                    44 reviews
                  </ReviewsNum>
                </Card>
              </Col>
              <Col xs={6} md={4} lg={3}>
                <Card href="">
                  <Image src={imageExample} />
                  <Place>
                    <Price>$50</Price>
                    Salsa Night
                  </Place>
                  <ReviewsNum>
                    <Stars />
                    64 reviews
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
