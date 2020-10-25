import React from "react";
import {
  Wrapper,
  HintUp,
  Container,
  Title,
  DeleteAllHolder,
  DeleteAll,
  Bigger,
  LowerHolder,
  HintDown,
  AddItem,
} from "../styles";


import { FaExclamation } from "react-icons/fa";

import QuestWishList from "../components/questOrWish-list.component";
import TextInput from "../components/input.component";

const MainQuestPage = ({
  handleAddItem,
  handleDeleteCompleted,
  value,
  onChange,
  items,
  toggleComplete,
}) => {
  return (
    <Wrapper>
      <Container onSubmit={(e) => e.preventDefault()}>
        <Title>Main Quests:</Title>
        <HintUp>(tap on Quest to Complete)</HintUp>
        <DeleteAllHolder>
          <DeleteAll onClick={handleDeleteCompleted}>
            <Bigger>X</Bigger> Delete All Completed
          </DeleteAll>
        </DeleteAllHolder>
        <QuestWishList items={items} toggleComplete={toggleComplete} />

        <LowerHolder>
          <TextInput value={value} onChange={onChange} />

          <HintDown>
            (tap <FaExclamation size={20} /> to Add new Quest)
          </HintDown>
          <AddItem onClick={handleAddItem}>
          <FaExclamation size={20} /> New Quest
          </AddItem>
        </LowerHolder>
      </Container>
    </Wrapper>
  );
};

export default MainQuestPage;
