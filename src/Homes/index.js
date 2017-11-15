import React from "react";
import styled from "styled-components";
import GoogleMap from "google-map-react";
import imageExample from "./imageExample.png";
import { Grid, Col, Row } from "react-flexbox-grid";
import Card from "./Card";
import Header from "../Header/";

import Filters from "../UI/Filters";
import Paginator from "../UI/Paginator";
const HomeCard = styled(Card)`margin-bottom: 40px;`;
const FixedHeader = styled(Header)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;
const Map = styled.div`
  position: fixed;
  right: 0;
  top: 138px;
  bottom: 0;
  display: none;
  @media (min-width: 992px) {
    display: block;
    left: calc(50% + 173px);
  }
  @media (min-width: 1200px) {
    left: calc(50% + 208px);
  }
`;
const Content = styled.div`padding-top: 162px;`;

export default function() {
  return (
    <div>
      <FixedHeader />
      <Filters />
      <Content>
        <Grid>
          <Row>
            <Col lg={8} sm={12}>
              <Row>
                <Col sm={6}>
                  <HomeCard
                    imgSrc={imageExample}
                    price="82"
                    beds="9 beds"
                    superhost="97"
                  >
                    La Salentina, see, nature & relax
                  </HomeCard>
                </Col>
                <Col sm={6}>
                  <HomeCard
                    imgSrc={imageExample}
                    price="82"
                    beds="9 beds"
                    superhost="97"
                  >
                    La Salentina, see, nature & relax
                  </HomeCard>
                </Col>
                <Col sm={6}>
                  <HomeCard
                    imgSrc={imageExample}
                    price="82"
                    beds="9 beds"
                    superhost="97"
                  >
                    La Salentina, see, nature & relax
                  </HomeCard>
                </Col>
                <Col sm={6}>
                  <HomeCard
                    imgSrc={imageExample}
                    price="82"
                    beds="9 beds"
                    superhost="97"
                  >
                    La Salentina, see, nature & relax
                  </HomeCard>
                </Col>
                <Col sm={6}>
                  <HomeCard
                    imgSrc={imageExample}
                    price="82"
                    beds="9 beds"
                    superhost="97"
                  >
                    La Salentina, see, nature & relax
                  </HomeCard>
                </Col>
                <Col sm={6}>
                  <HomeCard
                    imgSrc={imageExample}
                    price="82"
                    beds="9 beds"
                    superhost="97"
                  >
                    La Salentina, see, nature & relax
                  </HomeCard>
                </Col>
                <Col sm={12}>
                  <Paginator />
                </Col>
              </Row>
            </Col>
            <Map>
              <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
              />
            </Map>
          </Row>
        </Grid>
      </Content>
    </div>
  );
}
