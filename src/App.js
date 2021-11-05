import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Styles/Styles.css";
import Header from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { BookList } from "./components/BookList/BookList";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/booklist" component={Home} exact></Route>
          <Route path="/booklists" component={BookList}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
