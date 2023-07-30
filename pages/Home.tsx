import React, { useContext } from "react";
import Header from "@/app/components/header";
import Menu from "@/app/components/menu";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Header />
      <Menu />
      <BodyWrapper>
        <h1>
          Find the best <span>talent</span>
        </h1>
        <p>
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
        <img src="/bg-pattern-home-2.svg"></img>
        <SkillWrapper>
          <img src="/bg-pattern-home-3.svg"></img>
          <h2>Build & manage distributed teams like no one else.</h2>
          <div>
            <aside>
              <img src="/"></img>
            </aside>
          </div>
        </SkillWrapper>
      </BodyWrapper>
    </>
  );
};

export default Home;

const BodyWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 600px;
  span {
    color: #f67e7e;
  }
  p {
    line-height: 35px;
  }
  img {
  }
`;

const SkillWrapper = styled.div`
  width: 100%;
  background-color: red;
  position: relative;
  color: white;
  text-align: initial;

  h2 {
    max-width: 300px;
  }
  img {
    width: 50%;
    position: absolute;
    right: -140px;
  }
  div {
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
