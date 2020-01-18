import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Header } from './components/Header';
import { Button } from './components/Button';
import { Input } from './components/Input';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header title="anything ..." />
      <Button onClick={() => console.log('hi')}>
        Click Me!
        </Button>
      <Input></Input>
      <header className="App-header">
        Anything goes here...
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
