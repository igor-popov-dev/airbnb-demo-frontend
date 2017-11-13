import styled from "styled-components";

export const Title = styled.h2`
  font-size: 24px;
  line-height: 1.4;
  margin: 39px 0 16px;
  font-weight: bold;
  position: relative;
  padding-left: 8px;
  padding-right: 60px;
  position: relative;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 34px;
    margin: 48px 0 24px;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
export const Card = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #383838;
`;
export const Place = styled.h3`
  font-size: 15px;
  line-height: 18px;
  color: #383838;
  font-weight: normal;
  margin-top: 8px;
  margin-bottom: 6px;
  font-weigt: 300;
`;
export const Price = styled.span`
  font-weight: bold;
  display: inline-block;
  margin-right: 4px;
`;
export const ReviewsNum = styled.p`
  font-size: 12px;
  line-height: 14px;
  margin: 0;
  color: #383838;
`;
export const Image = styled.img`width: 100%;`;
