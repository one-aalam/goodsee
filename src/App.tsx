import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { GlobalContext, initialValues } from './contexts/GlobalContext';

import { Header } from './components/Header';
import { MovieCardList } from './components/MovieCardList';

const App: React.FC = () => {
  return (
    <GlobalContext.Provider value={initialValues}>
    <div className="App">
      <Header title="GOODSEE" />
      <MovieCardList/>
    </div>
    </GlobalContext.Provider>
  );
}

export default App;
