// App.js
import React from 'react';
import AppRouter from './Router';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

const App = () => {
  return (
    <Router> 
      <div className='container mx-auto p-4'>
        <Header />
        <AppRouter />
      </div>
    </Router>
  );
};

export default App;
