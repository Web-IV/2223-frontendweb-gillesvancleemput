import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import MyAuth0Provider from './context/MyAuth0Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyAuth0Provider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </MyAuth0Provider>
  </React.StrictMode>
);
reportWebVitals();
