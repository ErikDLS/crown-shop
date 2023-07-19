import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5vh;
`;

export const Title = styled(Link)`
  font-size: clamp(16px, 5vw, 28px);
  margin-bottom: 3vw;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18vw, 1fr));
  column-gap: 2vw;
`;
