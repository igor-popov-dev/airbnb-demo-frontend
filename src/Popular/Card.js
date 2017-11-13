import React from "react";
import styled from "styled-components";
import { Image, Card } from "../CommonStyles";

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

export default function(props) {
  return (
    <Card>
      <Image src={props.imgSrc} />
      <Theme>{props.theme}</Theme>
      <Name>{props.children}</Name>
      <Check>About {props.midCheck}$ per person</Check>
    </Card>
  );
}
