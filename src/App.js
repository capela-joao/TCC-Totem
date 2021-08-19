import React from 'react';
import Routes from './routes/index.js';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global.js';
import Header from './components/header/index.js';

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
      <GlobalStyle/>
    </>
  );
}

export default App;
