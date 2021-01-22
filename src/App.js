import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./globalStyles";
import MainQuestPage from "./pages/mainQuestPage-component";
import SideQuestPage from "./pages/sideQuestPage-component";
import WishListPage from "./pages/wishListPage-component";
import NotFoundPage from "./pages/notFoundPage-component";
import HtmlLayout from "./pages/html-Layout.component";
import HtmlBackground from "./utils/animated-background/html-Background.component";

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
    <div id="App">
      <GlobalStyle />
      <HtmlBackground />

      <div className="content">
        <Switch>
          <Route path="/" exact component={HtmlLayout} />
          <Route
            path="/main-quest"
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
