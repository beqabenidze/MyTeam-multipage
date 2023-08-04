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
          {/* <img src="/bg-pattern-home-3.svg"></img> */}
          <h2>Build & manage distributed teams like no one else.</h2>
          <div>
            <aside>
              <img src="/icon-person.svg"></img>
              <h3>Experienced Individuals</h3>
              <p>
                Our network is made up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </aside>
            <aside>
              <img src="/icon-cog.svg"></img>
              <h3>Easy to Implement</h3>
              <p>
                Our processes have been refined over years of implementation
                meaning our teams always deliver.
              </p>
            </aside>
            <aside>
              <img src="/icon-chart.svg"></img>
              <h3>Enhanced Productivity</h3>
              <p>
                Our customized platform with in-built analytics helps you manage
                your distributed teams.
              </p>
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
  position: relative;
  color: white;
  text-align: initial;
  h2 {
    max-width: 200px;
  }
  div {
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }
  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  h3 {
    color: #f67e7e;
  }
`;
