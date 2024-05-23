// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from '/Users/kieralynnwilson/Documents/Coding Projects/new react app/singlePageApp/src/components/ArticleList.js';
import ArticleDetail from '/Users/kieralynnwilson/Documents/Coding Projects/new react app/singlePageApp/src/components/ArticleDetail.js';

import Header from './components/Header';
import Footer from './components/Footer';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

const App = () => {
  return (
    <div>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<ArticleList/>} />
        <Route path="/article/:url" element={<ArticleDetail/>} />
        <Route path="/books" element={<BookList/>} />
        <Route path="/book/:title" element={<BookDetail />} />
      </Routes>
    </Router>
      <Footer/>
    </div>
  );
};

export default App;
