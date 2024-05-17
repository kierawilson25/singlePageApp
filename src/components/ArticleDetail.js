// src/components/ArticleDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
  const { url } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=web_url:("${decodeURIComponent(
          url
        )}")&api-key=${process.env.REACT_APP_NYT_API_KEY}`
      );
      setArticle(response.data.response.docs[0]);
    };
    fetchArticle();
  }, [url]);

  if (!article) return <div>Loading...</div>;

  return (
    <div>
      <h1>{article.headline.main}</h1>
      <p>{article.lead_paragraph}</p>
      <a href={article.web_url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
};

export default ArticleDetail;

