import React from "react";
import styled from "styled-components";
import { Row } from "../Explore/";
import footerLogo from "./footerLogo.svg";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";

const Bottom = styled.div`
  margin-top: 48px;
  border-top: 1px solid #f0f0f0;
`;
const Col6 = styled.div`
  padding-right: 8px;
  padding-left: 8px;
  flex-basis: 50%;
  max-width: 50%;
`;
const List = styled.ul`
  padding-left: 0;
  list-style: none;
  font-size: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const ListItem = styled.li`
  display: inline-block;
  margin-left: 16px;
`;
const Link = styled.a`
  color: #636363;
  font-size: 15px;
  text-decoration: none;
`;
const Left = Col6.extend`
  display: flex;
  flex-direction: row;
  height: 88px;
  align-items: center;
`;
const Right = Col6.extend`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: right;
`;
const Navigation = styled.nav`width: 100%;`;
const Logo = styled.img`
  display: inline-block;
  margin-right: 12px;
`;
const SocialLink = styled.a`
  font-size: 0;
  width: 24px;
  height: 24px;
  display: inline-block;
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

export default function() {
  return (
    <div className="container">
      <Bottom>
        <Row>
          <Left>
            <Logo src={footerLogo} />
            <span>© Airbnb Inc.</span>
          </Left>
          <Right>
            <Navigation>
              <List>
                <ListItem>
                  <Link href="">Terms</Link>
                </ListItem>
                <ListItem>
                  <Link href="">Privacy</Link>
                </ListItem>
                <ListItem>
                  <Link href="">Site map</Link>
                </ListItem>
                <ListItem>
                  <FacebookLink href="">facebook</FacebookLink>
                </ListItem>
                <ListItem>
                  <TwitterLink>twitter</TwitterLink>
                </ListItem>
                <ListItem>
                  <InstagramLink>instagram</InstagramLink>
                </ListItem>
              </List>
            </Navigation>
          </Right>
        </Row>
      </Bottom>
    </div>
  );
}
