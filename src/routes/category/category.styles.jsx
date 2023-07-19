import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25vw, 1fr));
  column-gap: 1vw;
  row-gap: 2.5vw;
  padding-bottom: 3vw;
`;

export const CategoryTitle = styled.h2`
  font-size: clamp(16px, 5vw, 36px);
  padding-top: 1vw;
  margin-bottom: 1vw;
  text-align: center;
`;
