// src/components/ArticleList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles.css';




const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
        );
        
        setArticles(response.data.results);
      }catch (error) {
        setError(error.message);
      }
    };
    fetchArticles();
  }, []);
  
  if (error) return <div>Error: {error}</div>;
  if (!articles) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>Top Articles</h1>
      <h3>Click on any article to read more about it.</h3>
      <ol >
        {articles.map((article) => (
          <li key={article.url} className="article-item ">
            <Link to={`/article/${encodeURIComponent(article.url)}`} style={{ textDecoration: 'none', color: 'inherit' }} >
              <div className='article-card'>
                <p className="article-link">{article.title}</p>
                <p className="article-description">{article.abstract}</p>

              </div>
            </Link>
            
          </li>
        ))}
      </ol>
    </div>
  );
};


export default ArticleList;
