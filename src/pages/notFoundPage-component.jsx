import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Error404>Error404</Error404>
      <Description>Yeah, something went wrong</Description>
      <Link to="/">
        <Hyperlink>Click Here to get back to Main Quests</Hyperlink>{" "}
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 40%;
  width: 400px;
  height: 700px;
`;

const Description = styled.span`
  margin: 10px;
  line-height: 122%;
  font-weight: 500;
  font-size: 18px;
  line-height: 175%;
`;

const Error404 = styled.span`
  font-size: 40px;
`;

const Hyperlink = styled.span`
  color: darkblue;
  cursor: pointer;
`;

export default NotFoundPage;
