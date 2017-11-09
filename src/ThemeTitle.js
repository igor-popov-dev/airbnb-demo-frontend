import React from "react";
import styled from "styled-components";

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
  width: 70%;
  font-size: 24px;
  line-height: 1.4;
  font-weight: bold;
  position: relative;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 34px;
  }
`;
const MoreContainer = styled.div`
  width: 30%;
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
      <Title>{props.content}</Title>
      <MoreContainer>
        <MoreLink href={props.moreHref}>See all</MoreLink>
      </MoreContainer>
    </Container>
  );
}
