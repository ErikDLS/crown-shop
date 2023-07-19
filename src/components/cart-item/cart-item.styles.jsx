import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.75vw 0.5vw;
  font-size: clamp(10px, 2.5vw, 16px);
`;

export const Image = styled.img`
  width: 30%;
`;

export const Name = styled.span`
  font-size: 16px;
`;
