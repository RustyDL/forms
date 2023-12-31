import { useState } from 'react';
import SignUpForm from './components/signup/SignUpForm';
import Authenticate from './components/auth/Authenticate';
import './App.css';

function App() {
  const [authToken, setAuthToken] = useState(null);

  return (
    <>
    <SignUpForm token={token} setToken={setToken} />
    <Authenticate token={token} setToken={setToken} />
    </>
  )
}

export default App