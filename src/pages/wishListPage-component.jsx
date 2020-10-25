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

import { GiRoundStar } from "react-icons/gi";


import QuestWishList from "../components/questOrWish-list.component";
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
    <Wrapper>
      <Container onSubmit={(e) => e.preventDefault()}>
        <Title>Wish List:</Title>
        <HintUp>(tap on Wish to Complete)</HintUp>
        <DeleteAllHolder>
          <DeleteAll onClick={handleDeleteCompleted}>
            <Bigger>X</Bigger> Delete All Completed
          </DeleteAll>
        </DeleteAllHolder>
        <QuestWishList items={items} toggleComplete={toggleComplete} />

        <LowerHolder>
          <TextInput value={value} onChange={onChange} />

          <HintDown>
            (tap <GiRoundStar size={20} /> to Add new Wish)
          </HintDown>
          <AddItem onClick={handleAddItem}>
            <GiRoundStar size={20} /> New Wish
          </AddItem>
        </LowerHolder>
      </Container>
    </Wrapper>
  );
};

export default WishPage;
