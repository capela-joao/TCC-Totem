import React from 'react';
import Routes from './routes/index.js';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
      <GlobalStyle/>
    </>
  );
}

export default App;
