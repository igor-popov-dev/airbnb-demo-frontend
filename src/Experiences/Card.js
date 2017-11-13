import React from "react";
import { Card, Place, Price, ReviewsNum, Image } from "../CommonStyles";
import Stars from "../Stars/";

export default function(props) {
  return (
    <Card href={props.href}>
      <Image src={props.imgSrc} />
      <Place>
        <Price>${props.price}</Price>
        {props.children}
      </Place>
      <ReviewsNum>
        <Stars />
        {props.reviews} reviews
      </ReviewsNum>
    </Card>
  );
}
