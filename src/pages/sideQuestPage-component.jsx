import React from "react";
import {
  Wrapper,
  Container,
  Title,
  DeleteAllHolder,
  DeleteAll,
  Bigger,
  LowerHolder,
  HintDown,
  AddItem,
} from "../styles";

import QuestWishList from "../components/questOrWish-list.component";
import TextInput from "../components/input.component";

const SideQuestPage = ({
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
        <Title>Side Quests:</Title>

        <DeleteAllHolder>
          <DeleteAll onClick={handleDeleteCompleted}>
            <Bigger>X</Bigger> Delete All Completed
          </DeleteAll>
        </DeleteAllHolder>
        <QuestWishList items={items} toggleComplete={toggleComplete} />

        <LowerHolder>
          <TextInput value={value} onChange={onChange} />

          <HintDown>
            (tap <Bigger>!</Bigger> to Add new Quest)
          </HintDown>
          <AddItem onClick={handleAddItem}>
            <Bigger>!</Bigger> New Quest
          </AddItem>
        </LowerHolder>
      </Container>
    </Wrapper>
  );
};

export default SideQuestPage;
