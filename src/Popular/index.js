import React from "react";
import styled from "styled-components";
import { Row, Image } from "../CommonStyles";
import { Grid, Col } from "react-flexbox-grid";
import { Right, Left, Slider, SliderContainer } from "../Slider/";
import SectionTitle from "../SectionTitle/";
import imageExample from "./imageExample.png";

const Card = styled.a`
  color: #383838;
  text-decoration: none;
  cursor: pointer;
`;
const Theme = styled.p`
  margin: 12px 0 2px;
  font-size: 10px;
  line-height: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;
const Name = styled.h3`
  margin: 0 0 4px;
  font-size: 18px;
`;
const Check = styled.p`
  font-weight: light;
  font-size: 18px;
  line-height: 21px;
  opacity: 0.9;
  margin: 0;
`;
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
                <Card>
                  <Image src={imageExample} />
                  <Theme>Speakeasy</Theme>
                  <Name>Chumley’s</Name>
                  <Check>About $60 per person</Check>
                </Card>
              </Col>
              <Col xs={6} md={4} lg={3}>
                <Card>
                  <Image src={imageExample} />
                  <Theme>Korean gastropub</Theme>
                  <Name>Hanjan</Name>
                  <Check>About $50 per person</Check>
                </Card>
              </Col>
              <Col xs={6} md={4} lg={3}>
                <Card>
                  <Image src={imageExample} />
                  <Theme>German american</Theme>
                  <Name>Prime Meats</Name>
                  <Check>About $55 per person</Check>
                </Card>
              </Col>
              <Col xs={6} md={4} lg={3}>
                <Card>
                  <Image src={imageExample} />
                  <Theme>Fine seafood</Theme>
                  <Name>Seaprice</Name>
                  <Check>About $70 per person</Check>
                </Card>
              </Col>
            </Row>
          </Slider>
        </SliderContainer>
      </Grid>
    </section>
  );
}
