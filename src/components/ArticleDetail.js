// src/components/ArticleDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles.css';


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

    const navigate = useNavigate();
  
    const handleBackClick = () => {
      navigate('/');
    };


  if (!article) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="button-container">
        <button className="back-button" onClick={handleBackClick}>Back</button>
      </div>
      <a href="/"></a>
      <h1>{article.headline.main}</h1>
      <p><b>Publication Date:</b> {article.pub_date.substring(0,9)}</p>
      <p><b>Document Type: </b>{article.document_type}</p>
      <p><b>Source: </b>{article.source}</p>
      <p><b>Section:</b> {article.section_name}</p>
      <p><b>Author: </b> {article.byline?.original.substring(2)}</p>
      <p><b>Word Count: </b> {article.word_count}</p>
      <p><b>Type of Material: </b> {article.type_of_material}</p>
      <p>&nbsp;</p>
      <p><b>Lead Paragraph: </b></p>
      <p>{article.lead_paragraph}</p>
      <a href={article.web_url} target="_blank" rel="noopener noreferrer" className="read-more">Read more</a>
    </div>
  );
};

export default ArticleDetail;

