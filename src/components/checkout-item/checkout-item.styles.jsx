import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: clamp(16px, 2vw, 24px);
  align-items: center;
`;

export const ImgContainer = styled.div`
  width: 20%;
  max-height: 20vw;
  padding-right: 2vw;
`;

export const Image = styled.img`
  max-width: 20vw;
  max-height: 20vw;
  max-width: 15vw;
  max-height: 15vw;
  height: 100%;
  width: 100%;
`;

export const Name = styled.span`
  width: 23%;
  padding-right: 2vw;
`;

export const Quantity = styled.span`
  width: 23%;
  display: flex;
`;

export const Price = styled.span`
  width: 23%;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
