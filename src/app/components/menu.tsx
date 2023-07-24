import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../page";
import close from "/avatar-aden.png";

function Menu() {
  const { menu, setMenu, size } = useContext(Context);
  return (
    <MenuWrapper
      style={{
        right: menu ? "0px" : "-50vw",
        display: size != "mobile" ? "none" : "block",
      }}
    >
      <p
        onClick={() => {
          setMenu(false);
        }}
      >
        awdaw
      </p>
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
  p {
    text-align: right;
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
  }
`;
