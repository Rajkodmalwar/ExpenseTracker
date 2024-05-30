import React from 'react';
import ReactDOM from 'react-dom/client';
import ExpenseTracker from './ExpenseTracker';  
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <ExpenseTracker></ExpenseTracker>
  </React.StrictMode>
);
