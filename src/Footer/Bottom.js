import React from "react";
import styled from "styled-components";
import { Row } from "../CommonStyles";
import footerLogo from "./footerLogo.svg";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";

const Bottom = styled.div`
  border-top: 1px solid #f0f0f0;
  @media (min-width: 768px) {
    margin-top: 48px;
  }
`;
const Col6 = styled.div`
  padding-right: 8px;
  padding-left: 8px;
  flex-basis: 50%;
  max-width: 50%;
`;
const Link = styled.a`
  color: #636363;
  font-size: 15px;
  text-decoration: none;
  margin-left: 16px;
  display: inline-block;
`;
const Left = Col6.extend`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-basis: 100%;
  max-width: 100%;
  @media (min-width: 768px) {
    height: 88px;
    flex-basis: 50%;
    max-width: 50%;
  }
`;
const Right = Col6.extend`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  flex-basis: 100%;
  max-width: 100%;
  @media (min-width: 768px) {
    text-align: right;
    flex-basis: 50%;
    max-width: 50%;
  }
`;
const Navigation = styled.nav`
  width: 100%;
  font-size: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10px;
  @media (min-width: 768px) {
    justify-content: flex-end;
    padding-top: 0;
  }
`;
const Logo = styled.img`
  display: inline-block;
  margin-right: 12px;
`;
const SocialLink = styled.a`
  font-size: 0;
  width: 24px;
  height: 24px;
  display: inline-block;
  margin-left: 16px;
`;
const FacebookLink = SocialLink.extend`
  background: url(${facebook}) 50% 50% no-repeat;
`;
const TwitterLink = SocialLink.extend`
  background: url(${twitter}) 50% 50% no-repeat;
`;
const InstagramLink = SocialLink.extend`
  background: url(${instagram}) 50% 50% no-repeat;
`;
const BottomRow = Row.extend`
  flex-direction: column;
  padding-top: 16px;
  padding-bottom: 16px;
  @media (min-width: 768px) {
    flex-direction: row;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export default function() {
  return (
    <div className="container">
      <Bottom>
        <BottomRow>
          <Left>
            <Logo src={footerLogo} />
            <span>© Airbnb Inc.</span>
          </Left>
          <Right>
            <Navigation>
              <Link href="">Terms</Link>
              <Link href="">Privacy</Link>
              <Link href="">Site map</Link>
              <FacebookLink href="">facebook</FacebookLink>
              <TwitterLink>twitter</TwitterLink>
              <InstagramLink>instagram</InstagramLink>
            </Navigation>
          </Right>
        </BottomRow>
      </Bottom>
    </div>
  );
}
