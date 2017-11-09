import React from "react";
import styled from "styled-components";
import { Row } from "../Explore/";
import DropDownImage from "./dropDown.svg";
import Bottom from "./Bottom.js";

const Footer = styled.footer`
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
  margin-top: 64px;
  @media (min-width: 768px) {
    padding-top: 48px;
  }
`;
const DropDown = styled.select`
  padding: 11px;
  border-radius: 4px;
  border: none;
  background: #ffffff;
  display: block;
  width: 110%;
  height: 100%;
  font-size: 12px;
  line-height: 6px;
  font-weight: 300;
  &:focus {
    outline: 0;
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;
export const Col3 = styled.div`
  flex-basis: 100%;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 16px 0 24px;
  @media (min-width: 768px) {
    height: auto;
    display: block;
    flex-basis: 25%;
    max-width: 25%;
    padding: 0 8px;
  }
`;
const DropDownWrapper = styled.div`
  height: 48px;
  border-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  overflow: hidden;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;
const Label = styled.label`
  background: #fff url(${DropDownImage}) 50% 50% no-repeat;
  width: 16px;
  height: 16px;
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -8px;
`;
const Title = styled.h4`
  font-size: 15px;
  color: #383838;
  margin: 0 0 16px;
  font-weight: bold;
`;
const NavList = styled.ul`
  padding-left: 0;
  list-style: none;
`;
const Link = styled.a`
  text-decoration: none;
  color: #636363;
  font-size: 15px;
  font-weight: normal;
  margin-bottom: 8px;
  display: inline-block;
`;
const Col2Offset1 = styled.div`
  display: none;
  margin-left: 8.33333333%;
  flex-basis: 16.66666667%;
  max-width: 16.66666667%;
  padding-right: 8px;
  padding-left: 8px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    display: block;
  }
`;
const DropDownCol = styled.div`
  flex-basis: 50%;
  max-width: 50%;
  padding-right: 8px;
  padding-left: 8px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
    padding-right: 0;
    padding-left: 0;
  }
`;

export default function() {
  return (
    <Footer>
      <div className="container">
        <Row>
          <Col3>
            <DropDownCol>
              <DropDownWrapper>
                <Label htmlFor="language" />
                <DropDown id="language">
                  <option>English</option>
                  <option>Russian</option>
                </DropDown>
              </DropDownWrapper>
            </DropDownCol>
            <DropDownCol>
              <DropDownWrapper>
                <Label htmlFor="currency" />
                <DropDown id="currency">
                  <option>United States dollar</option>
                  <option>Rubles</option>
                </DropDown>
              </DropDownWrapper>
            </DropDownCol>
          </Col3>
          <Col2Offset1>
            <Title>Airbnb</Title>
            <nav className="Footer__nav">
              <NavList>
                <li>
                  <Link href="">About us</Link>
                </li>
                <li>
                  <Link href="">Careers</Link>
                </li>
                <li>
                  <Link href="">Press</Link>
                </li>
                <li>
                  <Link href="">Policies</Link>
                </li>
                <li>
                  <Link href="">Help</Link>
                </li>
                <li className="Footer__li">
                  <Link href="">Diversity & Belongin</Link>
                </li>
              </NavList>
            </nav>
          </Col2Offset1>
          <Col2Offset1>
            <Title>Discover</Title>
            <nav>
              <NavList>
                <li>
                  <Link href="">Trust & Safety</Link>
                </li>
                <li>
                  <Link href="">Travel Credit</Link>
                </li>
                <li>
                  <Link href="">Gift Cards</Link>
                </li>
                <li>
                  <Link href="">Airbnb Citizen</Link>
                </li>
                <li>
                  <Link href="">Business Travel</Link>
                </li>
                <li>
                  <Link href="">Guidebooks</Link>
                </li>
                <li>
                  <Link href="">Airbnbmag</Link>
                </li>
              </NavList>
            </nav>
          </Col2Offset1>
          <Col2Offset1>
            <Title>Hosting</Title>
            <nav className="Footer__nav">
              <NavList>
                <li>
                  <Link href="">Why Host</Link>
                </li>
                <li>
                  <Link href="">Hospitality</Link>
                </li>
                <li>
                  <Link href="">Responsible Hosting</Link>
                </li>
                <li>
                  <Link href="">Community Center</Link>
                </li>
              </NavList>
            </nav>
          </Col2Offset1>
        </Row>
      </div>
      <Bottom />
    </Footer>
  );
}
