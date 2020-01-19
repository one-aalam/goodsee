import React from 'react';
import { Router } from "@reach/router";
import './App.css';

import { HomePage } from './components/HomePage';
import { MovieDetailPage } from './components/MovieDetailPage';
import { MovieDiscoverPage } from './components/MovieDiscoverPage';


const App: React.FC = () => {
  return (
    <>
      <Router>
        <HomePage path="/" />
        <MovieDetailPage path="movie/:id" />
        <MovieDiscoverPage path="discover" />
      </Router>
    </>
  );
}

export default App;
