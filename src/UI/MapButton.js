import styled from "styled-components";
import location from "./location.svg";

export const MapButton = styled.button`
  height: 40px;
  width: 40px;
  background: #fff url(${location}) 50% 50% no-repeat;
  border-radius: 50%;
  border: 1px solid rgba(72, 72, 72, 0.16);
  box-shadow: 0 2px rgba(72, 72, 72, 0.16);
  position: fixed;
  bottom: 24px;
  right: 8px;
  cursor: pointer;
  @media (min-width: 576px) {
    right: calc(50% - 280px);
  }
  @media (min-width: 768px) {
    right: calc(50% - 376px);
  }
  @media (min-width: 992px) {
    display: none;
  }
  &:focus {
    outline: 0;
  }
`;
