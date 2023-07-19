import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  min-height: 20vw;
  padding-top: 3vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 10vw;
  min-width: 35vw;
  font-size: clamp(16px, 1.5vw, 30px);
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
