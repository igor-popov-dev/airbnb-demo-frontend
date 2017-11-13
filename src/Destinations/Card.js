import React from "react";
import styled from "styled-components";
import { Image, Card } from "../CommonStyles";

const City = styled.h3`
  font-size: 15px;
  line-height: 18px;
  font-weight: bold;
  margin: 8px 0 0;
`;

export default function(props) {
  return (
    <Card>
      <Image src={props.imgSrc} />
      <City>{props.children}</City>
    </Card>
  );
}
