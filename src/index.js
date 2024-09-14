import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Ensure this is the correct path to your App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Ensure this matches the id in your index.html
);
