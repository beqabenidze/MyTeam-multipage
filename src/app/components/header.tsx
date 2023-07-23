import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../page";

function Header() {
  const { size, menu, setMenu } = useContext(Context);
  const handleClick = () => {
    setMenu(true);
  };
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <img src="/logo.svg" />
        <h2>home</h2>
        <h2>about</h2>
      </LogoWrapper>
      <a>contact us</a>
      <img src="/icon-hamburger.svg" onClick={handleClick} />
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: fit-content;
  color: white;
  background-color: #f44336;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 12s ease;
  a {
    border-radius: 20px;
    padding: 10px 20px;
    border: 1px solid white;
  }
`;

const LogoWrapper = styled.div`
  width: 50%;
  align-items: center;
  display: flex;
  gap: 30px;
`;
