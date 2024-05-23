// src/components/ArticleList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles.css';


const BookList = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try{
        const response = await axios.get(
          `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
        );
        setBooks(response.data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchBooks();
  }, []);
  
  
    if (error) return <div>Error: {error}</div>;
    if (!books) return <div>Loading...</div>;


  return (
    <div className="container">
      <h1>NYT Best Sellers</h1>
      <h3>Click on any book to read more about it.</h3>
      <ol className="book-list">
        {books.map((book) => (
          <li key={book.title} className="book-item">
            <Link to={`/book/${encodeURIComponent(book.title)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="book-card">
                <p className="article-link" >{book.title}</p>
                {book.description ? <p className='book-description'>Description: {book.description}</p> : "" }
              </div>
            </Link>

          </li>
        ))}
      </ol>
    </div>
  );
};


export default BookList;
