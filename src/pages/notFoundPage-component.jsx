import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Error404>Yeah, something went wrong</Error404>
      <Link to="/">
        <Hyperlink>Click Here to get back to Main Quests</Hyperlink>{" "}
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Error404 = styled.span`
  margin: 10px;
  

  font-size: 16px;
  line-height: 122%;
  display: flex;
  align-items: center;
  text-align: center;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 175%;
`;

const Hyperlink = styled.span`
  color: limegreen;
  cursor: pointer;
  
`;

export default NotFoundPage;
