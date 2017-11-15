import React from "react";
import styled, { css } from "styled-components";
import arrowRight from "./arrowRight.svg";
const Nav = styled.nav`
  font-size: 0;
  text-align: center;
  width: 100%;
`;
const Next = styled.a`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #0f7276;
  background: #fff url(${arrowRight}) 50% 50% no-repeat;
  display: inline-block;
  margin: 0px 10px;
  box-sizing: border-box;
  vertical-align: top;
`;
const Prev = Next.extend`transform: rotate(180deg);`;
const NumPag = styled.a`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: #0f7276;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  display: inline-block;
  margin: 0px 10px;
  text-decoration: none;
  cursor: pointer;
  vertical-align: top;
  &:hover {
    text-decoration: underline;
  }
  ${props =>
    props.active &&
    css`
      background: #0f7276;
      color: white;
    `};
`;
const Ellipsis = styled.span`
  display: inline-block;
  width: 32px;
  height: 32px;
  font-size: 16px;
  line-height: 32px;
  color: #0f7276;
  cursor: default;
`;
const Views = styled.div`
  margin-top: 8px;
  font-size: 16px;
  line-height: 19px;
  color: #383838;
  width: 100%;
  text-align: center;
`;
const Info = styled.div`
  margin: 40px 0 25px;
  font-size: 16px;
  line-height: 19px;
  color: #636363;
  text-align: center;
`;

export default function() {
  return (
    <div>
      <Nav>
        <Prev href="" />
        <NumPag active href="">
          1
        </NumPag>
        <NumPag href="">2</NumPag>
        <NumPag href="">3</NumPag>
        <Ellipsis>…</Ellipsis>
        <NumPag>17</NumPag>
        <Next />
      </Nav>
      <Views>1 – 18 of 300+ Renta</Views>
      <Info>
        Enter dates to see full pricing. Additional fees apply. Taxes may be
        added
      </Info>
    </div>
  );
}
