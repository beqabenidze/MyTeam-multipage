import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../page";

function Menu() {
  const { menu, setMenu, size } = useContext(Context);
  return (
    <MenuWrapper
      style={{
        right: menu ? "0px" : "-50vw",
        display: size != "mobile" ? "none" : "block",
      }}
    >
      <img
        src="/icon-close.svg"
        onClick={() => {
          setMenu(false);
        }}
      />
      <div>
        <h2>home</h2>
        <h2>about</h2>
      </div>
      <h6>contact us</h6>
    </MenuWrapper>
  );
}

export default Menu;

const MenuWrapper = styled.div`
  width: 50vw;
  position: absolute;
  top: 0;
  height: 100%;
  padding: 50px;
  transition: all 1s ease;
  color: white;
  background-color: #2c6269;
  text-align: initial;
  img {
    align-self: right;
    position: absolute;
    right: 40px;
  }
  div {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  h6 {
    margin-top: 50px;
    border-radius: 20px;
    padding: 10px 20px;
    border: 1px solid white;
    text-align: center;
  }
`;
