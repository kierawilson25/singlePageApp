// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArticleList from '/components/ArticleList';
import ArticleDetail from '/components/ArticleDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ArticleList} />
        <Route path="/article/:url" component={ArticleDetail} />
      </Switch>
    </Router>
  );
};

export default App;
