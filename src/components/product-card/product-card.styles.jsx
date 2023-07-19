import styled from "styled-components";

export const ProductCardContainer = styled.div`
  min-width: 100%;
  height: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 2vw;
  margin-bottom: 5vh;

  img {
    float: left;
    max-width: 100%;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    margin-bottom: 5px;
  }
  button {
    width: 75%;
    opacity: 0.7;
    position: absolute;
    top: 16vw;
    display: none;
  }
  &:hover {
    img {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-between;
`;
export const Name = styled.span`
  margin-bottom: 15px;
  font-size: clamp(10px, 2.5vw, 22px);
`;

export const Price = styled.span`
  font-size: clamp(10px, 2.5vw, 22px);
`;

export const Sup = styled.sup`
  font-size: clamp(5px, 1.25vw, 11px);
`;
