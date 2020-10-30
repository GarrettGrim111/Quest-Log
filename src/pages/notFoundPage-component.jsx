import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Container>
        <Error404>Error404</Error404>
        <Description>Yeah, something went wrong</Description>
        <Link to="/main-quest">
          <Hyperlink>Click Here to get back to Main Quests</Hyperlink>{" "}
        </Link>
        <Image src="/assets/Salty.jpg" alt="" />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url("/assets/Daco.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 600px;
  height: 780px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Description = styled.span`
  margin: 10px;
  line-height: 1;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.75;
`;

const Image = styled.img`
  width: 250px;
  height: auto;
  margin: 10px;
  border-radius: 5px;
`;

const Error404 = styled.span`
  font-size: 40px;
`;

const Hyperlink = styled.span`
  color: black;
  cursor: pointer;
`;

export default NotFoundPage;
