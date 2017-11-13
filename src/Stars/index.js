import React from "react";
import styled from "styled-components";
import star from "./star.svg";

export const StarsContainer = styled.span`
  display: inline-block;
  font-size: 0;
  margin-right: 8px;
`;
export const StarItem = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  background: url(${star}) 50% 50% no-repeat;
  margin-right: 4px;
`;

export default function() {
  return (
    <StarsContainer>
      <StarItem />
      <StarItem />
      <StarItem />
      <StarItem />
      <StarItem />
    </StarsContainer>
  );
}
