import React from 'react';
import { Router } from "@reach/router";
import './App.css';

import { HomePage } from './components/HomePage';
import { MovieDetailPage } from './components/MovieDetailPage';


const App: React.FC = () => {
  return (
    <>
      <Router>
        <HomePage path="/" />
        <MovieDetailPage path="movie/:id" />
      </Router>
    </>
  );
}

export default App;
