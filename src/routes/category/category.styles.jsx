import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25vw, 1fr));
  column-gap: 1vw;
  row-gap: 2.5vw;
`;

export const CategoryTitle = styled.h2`
  font-size: max(2.5em, 40px), min(1em, 16px);
  padding-top: 1vw;
  margin-bottom: 1vw;
  text-align: center;
`;

// grid-template-columns: repeat(4, 1fr);
