// src/components/ArticleList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
      );
      setArticles(response.data.results);
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Top Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.url}>
            <Link to={`/article/${encodeURIComponent(article.url)}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
