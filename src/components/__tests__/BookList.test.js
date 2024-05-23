// src/components/__tests__/ArticleList.test.js
import {React, act} from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import BookList from '../BookList';

// Mock axios
jest.mock('axios');

describe('BookList Component', () => {
  test('renders without crashing', async () => {
    const mockResponse = {
      data: {
        results: [
          { 
            title: 'Book 1',
            description: 'Description 1'
          },
          { 
            title: 'Book 2',
            description: 'Description 2'
          }
        ]
      }
    };

    // Mock the Axios get method
    
    axios.get = jest.fn().mockResolvedValue(mockResponse);
    render(
      <Router>
          <BookList />
      </Router>
    );
    expect(screen.getByText(/NYT Best Sellers/i)).toBeInTheDocument();
    expect(screen.getByText(/Click on any book to read more about it./i)).toBeInTheDocument();
  });

     test('displays books after fetching', async () => {
    // Mock response data
      const mockResponse = {
        data: {
          results: [
            { 
              title: 'Book 1',
              description: 'Description 1'
            },
            { 
              title: 'Book 2',
              description: 'Description 2'
            }
          ]
        }
      };

  
      // Mock the Axios get method
      axios.get = jest.fn().mockResolvedValue(mockResponse);
  
      render(
        <Router>
          <BookList />
        </Router>
      );
  
      // Wait for the component to finish rendering
      await waitFor(() => {

        expect(axios.get).toHaveBeenCalledWith(
            `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
            );
        // Assertions to check if articles are displayed
        expect(screen.getByText('Book 1')).toBeInTheDocument();
        expect(screen.getByText('Description: Description 1')).toBeInTheDocument();
        expect(screen.getByText('Book 2')).toBeInTheDocument();
        expect(screen.getByText('Description: Description 2')).toBeInTheDocument();
      });
    });
  



  jest.resetAllMocks()
});
