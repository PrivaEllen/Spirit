import React, { useContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './scss/App.scss';
import AppRouter from './router/AppRouter';

function App() {
  
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
