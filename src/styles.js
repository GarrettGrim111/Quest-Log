import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url("/assets/Daco.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 600px;
  height: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.form`
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  margin: 15px;
  font-size: 40px;
  font-weight: bold;
`;
export const HintUp = styled.span`
  margin: 15px;
  font-size: 18px;
`;

export const DeleteAllHolder = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const DeleteAll = styled.span`
  cursor: pointer;
  font-weight: bold;
`;
export const QuestWishBox = styled.ul`
  margin: 15px;
  width: 370px;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: scroll; // @TODO: Opravit problém s paddingem
  overflow-x: hidden;
`;

export const LowerHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const AddItem = styled.button`
  cursor: pointer;
  font-weight: bold;
  border: none;
  background-color: transparent;
  outline: none;
`;
export const HintDown = styled.span`
  font-size: 18px;
`;
export const Bigger = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 400px;
  margin: 10px;
`;

export const Delete = styled.span``;

export const Item = styled.li`
  cursor: pointer;
  margin: 0.5rem;
  text-decoration: ${(item) => (item.completed ? `line-through` : `unset`)};
`;
