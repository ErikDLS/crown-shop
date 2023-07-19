import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 90%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;
export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 2vw 4vw 2vw 0vw;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  font-size: clamp(12px, 2vw, 22px);
`;

export const HeaderBlock = styled.span`
  text-transform: uppercase;
  margin-left: -2vw;
  width: 18%;
  display: flex;

  &:first-child {
    margin-left: 0vw;
  }

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.span`
  margin-top: 5vw;
  margin-left: auto;
  font-size: clamp(18px, 2vw, 30px);
`;
