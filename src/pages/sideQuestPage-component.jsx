import React from "react";
import {
  Wrapper,
  HintUp,
  Container,
  Title,
  DeleteAllHolder,
  DeleteAll,
  LowerHolder,
  HintDown,
  CustomButton,
  Item,
  QuestWishBox,
} from "../styles";

import { FaExclamation } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

import Header from "../components/header-component";
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
    <>
      <Header />
      <Wrapper>
        <Container onSubmit={(e) => e.preventDefault()}>
          <Title>Side Quests:</Title>
          <HintUp>(tap on Quest to Complete)</HintUp>
          <DeleteAllHolder>
            <DeleteAll onClick={handleDeleteCompleted}>
              <AiTwotoneDelete size={20} /> Delete All Completed
            </DeleteAll>
          </DeleteAllHolder>
          <QuestWishBox>
            {items
              .filter((item) => item.category === "side")
              .map((item) => {
                return (
                  <Item
                    key={item.id}
                    onClick={() => {
                      toggleComplete(item.id);
                    }}
                    completed={item.completed}
                  >
                    {item.text}
                  </Item>
                );
              })}
          </QuestWishBox>

          <LowerHolder>
            <TextInput value={value} onChange={onChange} />

            <HintDown>
              (tap <FaExclamation size={20} /> to Add new Quest)
            </HintDown>
            <CustomButton onClick={handleAddItem} type="submit">
              <FaExclamation size={20} /> New Quest
            </CustomButton>
          </LowerHolder>
        </Container>
      </Wrapper>
    </>
  );
};

export default SideQuestPage;
