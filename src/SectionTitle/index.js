import React from "react";
import styled from "styled-components";
import moreArrow from "./moreArrow.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 39px 0 16px;
  padding-left: 8px;
  padding-right: 8px;
  @media (min-width: 768px) {
    margin: 48px 0 24px;
  }
`;
const Title = styled.h2`
  width: 80%;
  font-size: 24px;
  line-height: 1.4;
  font-weight: bold;
  position: relative;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 34px;
  }
`;
const MoreContainer = styled.div`
  width: 20%;
  text-align: right;
`;
const MoreLink = styled.a`
  text-decoration: none;
  line-height: 24px;
  font-size: 14px;
  font-weight: normal;
  color: #383838;
  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 10px;
    display: inline-block;
    margin-left: 8px;
    background: url(${moreArrow}) 50% 50% no-repeat;
  }
`;

export default function(props) {
  return (
    <Container>
      <Title>{props.name}</Title>
      <MoreContainer>
        <MoreLink href={props.href}>See all</MoreLink>
      </MoreContainer>
    </Container>
  );
}
