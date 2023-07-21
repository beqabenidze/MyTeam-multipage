import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../page";

function Header() {
  return (
    <HeaderWrapper>
      <img src="/logo.svg" />
      <div></div>
      <img src="/icon-hamburger.svg" />
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #f44336;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
