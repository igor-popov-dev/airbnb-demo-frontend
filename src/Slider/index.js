import styled from "styled-components";
import arrowRight from "./arrowRight.svg";

export const Right = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.16);
  position: absolute;
  right: -10px;
  top: 214px;
  margin-top: -20px;
  cursor: pointer;
  background: #fff url(${arrowRight}) 50% 50% no-repeat;
  z-index: 10;
  display: none;
  @media (min-width: 1200px) {
    display: block;
  }
`;
export const Left = Right.extend`
  right: auto;
  left: -10px;
  transform: rotate(180deg);
`;
export const SliderContainer = styled.div`position: relative;`;
export const Slider = styled.div`
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
`;
