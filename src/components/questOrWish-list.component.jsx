import React from "react";
import { Item, QuestWishBox } from "../styles";

const QuestWishList = ({ items, toggleComplete }) => {
  return (
    <QuestWishBox>
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            onClick={() => {
              toggleComplete(item.id);
            }}
            completed={item.completed}
          >
            {item.name}
          </Item>
        );
      })}
    </QuestWishBox>
  );
};

export default QuestWishList;
