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

import { GiRoundStar } from "react-icons/gi";
import { AiTwotoneDelete } from "react-icons/ai";

import Header from "../components/header-component";
import TextInput from "../components/input.component";

const WishPage = ({
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
          <Title>Wish List:</Title>
          <HintUp>(tap on Wish to Complete)</HintUp>
          <DeleteAllHolder>
            <DeleteAll onClick={handleDeleteCompleted}>
              <AiTwotoneDelete size={20} /> Delete All Completed
            </DeleteAll>
          </DeleteAllHolder>
          <QuestWishBox>
            {items
              .filter((item) => item.category === "wishlist")
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
              (tap <GiRoundStar size={20} /> to Add new Wish)
            </HintDown>
            <CustomButton onClick={handleAddItem} type="submit">
              <GiRoundStar size={20} /> New Wish
            </CustomButton>
          </LowerHolder>
        </Container>
      </Wrapper>
    </>
  );
};

export default WishPage;
