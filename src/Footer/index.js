import React from "react";
import styled from "styled-components";
import { Row } from "../Explore/";
import DropDownImage from "./dropDown.svg";
import Bottom from "./Bottom.js";
import { Col3 } from "../Experiences/";

const Footer = styled.footer`
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
  margin-top: 64px;
  padding-top: 48px;
`;
const DropDown = styled.select`
  padding: 11px;
  border-radius: 4px;
  border: none;
  background: #ffffff;
  display: block;
  width: 110%;
  height: 100%;
  font-size: 18px;
  line-height: 6px;
  font-weight: 300;
  &:focus {
    outline: 0;
  }
`;
const DropDownWrapper = styled.div`
  height: 48px;
  border-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  overflow: hidden;
  position: relative;
  margin-bottom: 16px;
`;
const Label = styled.label`
  background: #fff url(${DropDownImage}) 50% 50% no-repeat;
  width: 16px;
  height: 16px;
  position: absolute;
  right: 16px;
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
  margin-left: 8.33333333%;
  flex-basis: 16.66666667%;
  max-width: 16.66666667%;
  padding-right: 8px;
  padding-left: 8px;
`;

export default function() {
  return (
    <Footer>
      <div className="container">
        <Row>
          <Col3>
            <DropDownWrapper>
              <Label htmlFor="language" />
              <DropDown className="Select" id="language">
                <option>English</option>
                <option>Russian</option>
              </DropDown>
            </DropDownWrapper>
            <DropDownWrapper>
              <Label htmlFor="currency" />
              <DropDown className="Select" id="currency">
                <option>United States dollar</option>
                <option>Rubles</option>
              </DropDown>
            </DropDownWrapper>
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
