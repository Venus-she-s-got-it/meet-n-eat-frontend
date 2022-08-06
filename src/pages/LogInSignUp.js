import React from 'react';
import Login from '../components/LogIn';
import SignUp from '../components/SignUp';
import { useState } from 'react';

const LogInSignUp = () => {
  const [loginSignup, setLoginSignup] = useState(false);

  return (
    <>
      <h1>MEET & EAT</h1>

      <button onClick={() => setLoginSignup(!loginSignup)}>
        <h2>LOG IN</h2>
      </button>

      <button onClick={() => setLoginSignup(!loginSignup)}>
        <h2>SIGN UP</h2>
      </button>

      {loginSignup === true && <Login />}
      {loginSignup === false && <SignUp />}
    </>
  );
};

export default LogInSignUp;
