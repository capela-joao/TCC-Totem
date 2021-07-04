import React from 'react';
import SignIn from './pages/SignIn/index.js';
import SignUp from "./pages/SignUp/index.js";
import GlobalStyle from './styles/global';

function App() {

  return (
    <div className="App">
      <SignIn/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
