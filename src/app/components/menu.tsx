import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../page";

function Menu() {
  const { menu } = useContext(Context);
  return (
    <MenuWrapper style={{ right: menu ? "200px" : "-50vw" }}>Menu</MenuWrapper>
  );
}

export default Menu;

const MenuWrapper = styled.div`
  width: 50vw;
  position: absolute;

  background-color: green;
`;
