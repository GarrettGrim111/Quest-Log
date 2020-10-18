import React from "react";
import { GlobalStyle } from "./globalStyles";
import MainQuestPage from "./pages/mainQuestPage-component";
import SideQuestPage from "./pages/sideQuestPage-component";
import Header from "./components/header-component";
import WishListPage from "./pages/wishListPage-component";
import NotFoundPage from "./pages/notFoundPage-component";

import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />

      {/* <MainQuestPage />
      <SideQuestPage />
      <WishListPage /> */}

      <div className="content">
        <Switch>
          <Route path="/" exact component={MainQuestPage} />
          <Route path="/side-quest" exact component={SideQuestPage} />
          <Route path="/wish-list" exact component={WishListPage} />
          <Route path="/not-found" exact component={NotFoundPage} />
          <Redirect to="not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
