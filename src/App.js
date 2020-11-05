import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./globalStyles";
import MainQuestPage from "./pages/mainQuestPage-component";
import SideQuestPage from "./pages/sideQuestPage-component";
import WishListPage from "./pages/wishListPage-component";
import NotFoundPage from "./pages/notFoundPage-component";
import AnimatedLayout from "./pages/vimeo-WorkingLayout.component";
import AnimatedBackground from "./utils/animated-background/vimeoSource-Working.component";
// import styled from "styled-components";
// import "./loadingStyle.css";

import { v4 as uuidv4 } from "uuid";
import { Route, Switch, Redirect } from "react-router-dom";

import setLocalStorage from "./utils/setLocalStorage";


// const loader = document.querySelector(".loader");
// const showLoader = () => loader.classList.remove("loader--hide");
// const hideLoader = () => loader.classList.add("loader--hide");

function App() {
  // useEffect(hideLoader, []);

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
      <AnimatedBackground />

      <div className="content">
        <Switch>
          <Route
            path="/"
            exact
            component={AnimatedLayout}
            // hideLoader={hideLoader}
            // showLoader={showLoader}
          />
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
      {/* <script
        crossorigin
        src="https://unpkg.com/react@16/umd/react.development.js"
      ></script>
      <script
        crossorigin
        src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
      ></script> */}
    </div>
  );
}

// const Loader = styled.div`
//   position: absolute;
//   top: calc(50% - 4em);
//   left: calc(50% - 4em);
//   width: 6em;
//   height: 6em;
//   border: 1.1em solid rgba(0, 0, 0, 0.2);
//   border-left: 1.1em solid #000000;
//   border-radius: 50%;
//   animation: load8 1.1s infinite linear;
//   transition: opacity 0.3s;
// `;

export default App;
