import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = 'http://localhost:4000/api/';
axios.interceptors.request.use(async (config) => {
  const accessToken = JSON.parse(localStorage.getItem('accessToken'));
  if (accessToken) {
    config.headers = {
      ...config.headers,
      authorization: `Bearer ${accessToken}`,
    };
  }
  return config;
});

root.render(<App />);
