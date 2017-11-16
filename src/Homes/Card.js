import React from "react";
import styled from "styled-components";
import { Card, Place, Price, ReviewsNum, Image } from "../CommonStyles";
import Stars from "../Stars/";
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

export default function(props) {
  return (
    <Card className={props.className}>
      <Image src={props.imgSrc} />
      <HomeInfo>
        <Price>${props.price}</Price>
        {props.children}
      </HomeInfo>
      <Notice>Entrie house · {props.beds}</Notice>
      <ReviewsNum>
        <Stars />
        {props.superhost} · Superhost
      </ReviewsNum>
    </Card>
  );
}
