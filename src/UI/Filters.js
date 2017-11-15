import React from "react";
import styled from "styled-components";
import { Grid, Col, Row } from "react-flexbox-grid";

const Nav = styled.nav`
  padding: 12px 0;
  border-bottom: 1px solid #dbdbdb;
  position: fixed;
  top: 81px;
  left: 0;
  right: 0;
  background: #fff;
`;
const Filter = styled.button`
  padding: 7px 16px;
  color: #383838;
  font-size: 14px;
  line-height: 16px;
  border-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  background: #fff;
  margin: 0 6px;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;

export default function() {
  return (
    <Nav>
      <Grid>
        <Row>
          <Col lg={12}>
            <Filter>Dates</Filter>
            <Filter>Guests</Filter>
            <Filter>Room type</Filter>
            <Filter>Price</Filter>
            <Filter>Instant book</Filter>
            <Filter>More filters</Filter>
          </Col>
        </Row>
      </Grid>
    </Nav>
  );
}