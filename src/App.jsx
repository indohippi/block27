import React, { useState } from 'react';
import Authenticate from './components/Authenticate';
import SignUpForm from './components/SignUpForm';
import './App.css';

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </div>
  );
}

export default App;
