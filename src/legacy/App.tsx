import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderMiniMenu from '../components/header_mini_menu/HeaderMiniMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <HeaderMiniMenu categoryColor="green" bigTabName_ja='協賛のお願い' bigTabName_en='Recruitment' bigTabURL='https://google.com' smallTab={[[{
          smallTabLabels: ['ググレカス'], smallTabURLs: ['https://google.com'],
          content: undefined
        }]]} />
      </header>
    </div>
  );
}

export default App;
