import React from "react";
import styled from "styled-components";

const MainQuestPage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Main Quests:</Title>
        <HintUp>(tap a Quest to Complete it, tap CROSS to Delete it) </HintUp>
        <DeleteAllHolder>
          <DeleteAll>X Delete All</DeleteAll>
        </DeleteAllHolder>
        <QuestList></QuestList>
        <LowerHolder>
          <HintDown>(tap ! to Add new Quest) </HintDown>
          <AddQuest>! New Quest</AddQuest>
        </LowerHolder>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 16%;
  width: 400px;
  height: 700px;
`;

const Title = styled.span`
  margin: 15px;
  font-size: 40px;
  font-weight: bold;
`;
const HintUp = styled.span`
  margin: 15px;
`;

const DeleteAllHolder = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 400px;
`;
const DeleteAll = styled.span`
  cursor: pointer;
`;
const QuestList = styled.div`
  margin: 15px;
`;

const LowerHolder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  position: absolute;
  bottom: 15%;
`;
const AddQuest = styled.span`
  cursor: pointer;
`;
const HintDown = styled.span``;

export default MainQuestPage;
