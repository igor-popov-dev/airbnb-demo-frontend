import React from "react";
import styled from "styled-components";
import logo from "./airnbnLogo.svg";
import search from "./search.svg";
import arrowDown from "./arrowDown.svg";

const Header = styled.header`border-bottom: 1px solid rgba(72, 72, 72, 0.3);`;
const Form = styled.form`
  position: relative;
  display: inline-block;
  margin-left: 10px;
  margin-right: 8px;
  width: 100%;
`;
const Input = styled.input`
  height: 48px;
  width: 100%;
  padding: 0;
  margin: 0;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px rgba(72, 72, 72, 0.08);
  padding-left: 50px;
  font-size: 16px;
  line-height: 46px;
  font-weight: light;
  &:focus {
    outline: 0;
  }
  @media (min-width: 768px) {
    width: 432px;
  }
  @media (min-width: 1200px) {
    width: 392px;
  }
`;
const FormButton = styled.input`
  background: url(${search}) no-repeat 50% 50%;
  font-size: 0;
  width: 21px;
  height: 22px;
  border: none;
  box-sizing: border-box;
  position: absolute;
  left: 16px;
  top: 14px;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  align-items: center;
  flex-wrap: wrap;
  margin-right: -8px;
  margin-left: -8px;
`;
const LeftBlock = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 100%;
  max-width: 100%;
  padding-right: 8px;
  padding-left: 8px;
  box-sizing: border-box;
  @media (min-width: 1200px) {
    flex-basis: 50%;
    max-width: 50%;
  }
`;
const RightBlock = styled.div`
  display: none;
  flex-basis: 50%;
  max-width: 50%;
  padding-right: 8px;
  padding-left: 8px;
  box-sizing: border-box;
  @media (min-width: 1200px) {
    display: block;
  }
`;
const LogoButton = styled.button`
  display: inline-block;
  border: none;
  padding-right: 17px;
  background: url(${arrowDown}) 100% 50% no-repeat;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
  @media (min-width: 1200px) {
    background: none;
  }
`;
const Navigation = styled.nav`text-align: right;`;
const Link = styled.a`
  text-decoration: none;
  font-size: 14px;
  line-height: 24px;
  color: #383838;
  display: inline-block;
  padding: 0 8px;
  margin-left: 8px;
`;

export default function() {
  return (
    <Header>
      <div className="container">
        <Row>
          <LeftBlock>
            <LogoButton href="">
              <img src={logo} alt="" />
            </LogoButton>
            <Form action="">
              <Input type="text" placeholder="Try &quot;Miami&quot;" />
              <FormButton type="submit" />
            </Form>
          </LeftBlock>
          <RightBlock>
            <Navigation>
              <Link href="">Become a host</Link>
              <Link href="">Help</Link>
              <Link href="">Sign up</Link>
              <Link href="">Log in</Link>
            </Navigation>
          </RightBlock>
        </Row>
      </div>
    </Header>
  );
}
