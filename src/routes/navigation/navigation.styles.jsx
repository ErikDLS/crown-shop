import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
  position: relative;
  min-height: 75vh;
`;

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  font-size: clamp(16px, 3vw, 24px);
  text-align: center;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding-top: 1.5vh;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-transform: uppercase;
`;
