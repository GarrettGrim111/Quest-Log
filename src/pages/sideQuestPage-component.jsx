import React from "react";
import styled from "styled-components";

const SideQuestPage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Side Quest:</Title>
        <HintUp>
          (tap a Quest to Complete it, tap{" "}
          <span style={{ fontWeight: "bold" }}>CROSS</span> to Delete it){" "}
        </HintUp>
        <DeleteAllHolder>
          <DeleteAll>
            <Bigger>X</Bigger> Delete All
          </DeleteAll>
        </DeleteAllHolder>
        <QuestList></QuestList>
        <LowerHolder>
          <HintDown>
            (tap <Bigger>!</Bigger> to Add new Quest){" "}
          </HintDown>
          <AddQuest>
            <Bigger>!</Bigger> New Quest
          </AddQuest>
        </LowerHolder>
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
`;

const Title = styled.span`
  margin: 15px;
  font-size: 40px;
  font-weight: bold;
`;
const HintUp = styled.span`
  margin: 15px;
  font-size: 18px;
`;

const DeleteAllHolder = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const DeleteAll = styled.span`
  cursor: pointer;
  font-weight: bold;
`;
const QuestList = styled.div`
  margin: 15px;
  width: 300px;
  height: 300px;
`;

const LowerHolder = styled.div`
  display: flex;
  justify-content: space-between;
`;
const AddQuest = styled.span`
  cursor: pointer;
  font-weight: bold;
`;
const HintDown = styled.span`
  font-size: 18px;
`;
const Bigger = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

export default SideQuestPage;
