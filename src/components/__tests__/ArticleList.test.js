// src/components/__tests__/ArticleList.test.js
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import ArticleList from '../ArticleList';

// Mock axios
jest.mock('axios');

describe('ArticleList Component', () => {
  test('renders without crashing', () => {
    const mockResponse = {
      data: {
        results: [
          { 
            url: 'http://example.com/1',
            title: 'Article 1',
            abstract: 'Abstract 1'
          },
          { 
            url: 'http://example.com/2',
            title: 'Article 2',
            abstract: 'Abstract 2'
          }
        ]
      }
    };

    // Mock the Axios get method
    axios.get = jest.fn().mockResolvedValue(mockResponse);
    render(
      <Router>
        <ArticleList />
      </Router>
    );
    expect(screen.getByText(/Top Articles/i)).toBeInTheDocument();
    expect(screen.getByText(/Click on any article to read more about it./i)).toBeInTheDocument();
  });

     test('displays articles after fetching', async () => {
    // Mock response data
      const mockResponse = {
        data: {
          results: [
            { 
              url: 'http://example.com/1',
              title: 'Article 1',
              abstract: 'Abstract 1'
            },
            { 
              url: 'http://example.com/2',
              title: 'Article 2',
              abstract: 'Abstract 2'
            }
          ]
        }
      };

  
      // Mock the Axios get method
      axios.get = jest.fn().mockResolvedValue(mockResponse);
  
      render(
        <Router>
          <ArticleList />
        </Router>
      );
  
      // Wait for the component to finish rendering
      await waitFor(() => {

        expect(axios.get).toHaveBeenCalledWith(
            `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
            );
        // Assertions to check if articles are displayed
        expect(screen.getByText('Article 1')).toBeInTheDocument();
        expect(screen.getByText('Abstract 1')).toBeInTheDocument();
        expect(screen.getByText('Article 2')).toBeInTheDocument();
        expect(screen.getByText('Abstract 2')).toBeInTheDocument();
      });
    });
  

  jest.resetAllMocks()
});
