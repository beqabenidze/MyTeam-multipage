import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../page";

function Header() {
  const { size, menu, setMenu } = useContext(Context);
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <img src="/logo.svg" />
        {size !== "mobile" && (
          <>
            <h2>home</h2>
            <h2>about</h2>
          </>
        )}
      </LogoWrapper>
      {size !== "mobile" && <a>contact us</a>}
      {size == "mobile" && (
        <img
          src="/icon-hamburger.svg"
          onClick={() => {
            setMenu(true);
          }}
        />
      )}
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: fit-content;
  color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;

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
  justify-content: space-between;
  gap: 20px;
`;
