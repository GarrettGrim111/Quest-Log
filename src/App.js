import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./globalStyles";
import MainQuestPage from "./pages/mainQuestPage-component";
import SideQuestPage from "./pages/sideQuestPage-component";
import Header from "./components/header-component";
import WishListPage from "./pages/wishListPage-component";
import NotFoundPage from "./pages/notFoundPage-component";
// import MusicPlayer from "./components/music-player.component";
// import Player from "./components/new-player.component";
// import ReactPlayer from "react-player/youtube";

import { v4 as uuidv4 } from "uuid";
import { Route, Switch, Redirect } from "react-router-dom";

import setLocalStorage from "./utils/setLocalStorage";

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  // Getting Quest/Wish items into local storage
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) setItems(storedItems);
  }, []);

  const handleAddItem = (category) => {
    if (text) {
      const item = {
        id: uuidv4(),
        text: text,
        category: category,
        status: false,
        date: new Date().toLocaleDateString("en-GB"), // DD/MM/YEAR
      };

      setLocalStorage(item, "items");
      setItems([...items, item]);
      setText("");
    }
  };

  // changing complete to incomplete - dynamically scratch complete ones with css
  const toggleComplete = (id) => {
    const newState = [...items];
    const item = newState.find((item) => item.id === id);
    item.completed = !item.completed;
    setItems(newState);
  };

  // not working - print only not completed ones
  const handleDeleteCompleted = () => {
    const newItems = items.filter((item) => !item.completed);
    localStorage.setItem("items", JSON.stringify(newItems));
    setItems(newItems);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      {/* <Player />
      <MusicPlayer /> */}
      {/* <ReactPlayer url="https://youtu.be/nuLo2WA8JJU" /> */}

      <div className="content">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <MainQuestPage
                {...props}
                handleDeleteCompleted={handleDeleteCompleted}
                handleAddItem={() => handleAddItem("main")}
                value={text}
                onChange={(e) => setText(e.target.value)}
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
                handleAddItem={() => handleAddItem("side")}
                value={text}
                onChange={(e) => setText(e.target.value)}
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
                handleAddItem={() => handleAddItem("wishlist")}
                value={text}
                onChange={(e) => setText(e.target.value)}
                items={items}
                toggleComplete={toggleComplete}
              />
            )}
          />
          <Route path="/not-found" exact component={NotFoundPage} />
          <Redirect to="not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
