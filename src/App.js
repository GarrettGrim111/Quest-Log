import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./globalStyles";
import MainQuestPage from "./pages/mainQuestPage-component";
import SideQuestPage from "./pages/sideQuestPage-component";
import Header from "./components/header-component";
import WishListPage from "./pages/wishListPage-component";
import NotFoundPage from "./pages/notFoundPage-component";
import MusicPlayer from "./components/music-player.component";
import { v4 as uuidv4 } from "uuid";
// import QuestWishList from "./components/questOrWish-list.component";
// import TextField from "./components/input.component";

import { Route, Switch, Redirect } from "react-router-dom";
// import { uuidv4 } from "uuid/v4";

function App() {
  // sem

  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const LOCAL_STORAGE_KEY = "questAPP.items";

  // Getting Quest/Wish items into local storage
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedItems) setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  // Adding items

  const handleAddItem = () => {
    if (inputValue) {
      setItems((prevItems) => {
        return [
          ...prevItems,
          { id: uuidv4(), name: inputValue, completed: false },
        ];
      });
      setInputValue("");
    }
  };

  // changing complete to incomplete - dynamically scratch complete ones with css
  const toggleComplete = (id) => {
    const newState = [...items];
    const todo = newState.find((item) => item.id === id);
    todo.completed = !todo.completed;
    setItems(newState);
  };

  // not working - print only not completed ones
  const handleDeleteCompleted = () => {
    const newItems = items.filter((item) => !item.completed);
    setItems(newItems);
  };

  // const handleChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <MusicPlayer />

      <div className="content">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <MainQuestPage
                {...props}
                handleDeleteCompleted={handleDeleteCompleted}
                handleAddItem={handleAddItem}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                items={items}
                toggleComplete={toggleComplete}
              />
            )}
          />
          <Route
            path="/side-quest"
            exact
            render={(props) => (
              <SideQuestPage
                {...props}
                handleDeleteCompleted={handleDeleteCompleted}
                handleAddItem={handleAddItem}
                inputValue={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                items={items}
                toggleComplete={toggleComplete}
              />
            )}
          />
          <Route
            path="/wish-list"
            exact
            render={(props) => (
              <WishListPage
                {...props}
                handleDeleteCompleted={handleDeleteCompleted}
                handleAddItem={handleAddItem}
                inputValue={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                items={items}
                toggleComplete={toggleComplete}
              />
            )}
          />
          <Route path="/not-found" exact component={NotFoundPage} />
          <Redirect to="not-found" />
        </Switch>
      </div>
      {/* <TextField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        /> */}

      {/* <QuestWishList items={items} toggleComplete={toggleComplete} /> */}
    </div>
  );
}

export default App;
