// src/components/BookDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookDetail = () => {
  const { title } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
        );
        const bookData = response.data.results.find(b => b.title === decodeURIComponent(title));

        setBook(bookData);

      } catch (error) {
        console.error("API Error:", error); // Log API error
        setError(error.message);
      }
    };
    fetchBook();
  }, [title]);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/books');
  };

  if (error) return <div>Error: {error}</div>;
  if (!book) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="button-container">
        <button className="back-button" onClick={handleBackClick}>Back</button>
      </div>
      <h1>{book.title}</h1>
      <p><b>Author:</b> {book.author}</p>
      <p><b>Publisher:</b> {book.publisher}</p>
      {book.publication_dt && <p><b>Publication Date:</b> {book.publication_dt}</p>}
      <p><b>Price:</b> {book.price}</p>
      {book.ranks_history && book.ranks_history[0].rank &&<p><b>Rank:</b> {book.ranks_history[0].rank}</p>}

      <p><b>Description:</b> {book.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default BookDetail;
