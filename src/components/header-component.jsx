import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <LinkHolder>
        <Link to="/main-quest">
          <Section>Main Quests</Section>
        </Link>
        <Link to="/side-quest">
          <Section>Side Quests</Section>
        </Link>
        <Link to="/wish-list">
          <Section>Wish List</Section>
        </Link>
      </LinkHolder>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 15px;
  position: absolute;
  left: 0;
  height: 100%;

  @media (max-width: 755px) {
    flex-direction: row;
    height: unset;
    width: 100%;
  }
`;

const LinkHolder = styled.div`
  @media (max-width: 755px) {
    display: flex;
    justify-content: space-around;
  }
`;

const Section = styled.div`
  margin: 15px;
  background-image: url("/assets/ScrollSmooth.png");
  background-position: center;
  background-repeat: no-repeat;
  height: 120px;
  width: 100px;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;

  @media (max-width: 755px) {
    width: 100%;
    height: 50%;
  } ;
`;

export default Header;
