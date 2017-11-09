import React from "react";
import styled from "styled-components";
import pictureExample from "./pictureExample.png";

export const Title = styled.h2`
  font-size: 32px;
  line-height: 34px;
  margin: 48px 0 24px;
  font-weight: bold;
  position: relative;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-right: -8px;
  margin-left: -8px;
`;
export const Col4 = styled.div`
  flex-basis: 33.33333333%;
  max-width: 33.33333333%;
  padding-right: 8px;
  padding-left: 8px;
  box-sizing: border-box;
`;

const PartLink = styled.a`
  display: block;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 2px rgba(72, 72, 72, 0.08);
  border: 1px solid rgba(72, 72, 72, 0.2);
  height: 72px;
  overflow: hidden;
`;
const PartName = styled.h2`
  margin: 0;
  line-height: 70px;
  font-size: 17px;
  padding-left: 120px;
`;
const Img = styled.img`
  float: left;
  width: 96px;
`;

export default function() {
  return (
    <section>
      <div className="container">
        <Title>Explore Airbnb</Title>
        <Row>
          <Col4>
            <PartLink>
              <Img src={pictureExample} alt="" />
              <PartName>Homes</PartName>
            </PartLink>
          </Col4>
          <Col4>
            <PartLink>
              <Img src={pictureExample} alt="" />
              <PartName>Experiences</PartName>
            </PartLink>
          </Col4>
          <Col4>
            <PartLink>
              <Img src={pictureExample} alt="" />
              <PartName>Restaurants</PartName>
            </PartLink>
          </Col4>
        </Row>
      </div>
    </section>
  );
}
