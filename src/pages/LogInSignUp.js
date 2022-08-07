import React from 'react';
import Login from '../components/LogIn';
import SignUp from '../components/SignUp';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const LogInSignUp = () => {
  const { option } = useParams();
  console.log(option);
  const [loginSignup, setLoginSignup] = useState('');
  useEffect(() => {
    setLoginSignup(option);
  }, [option]);

  return (
    <>
      <h1>MEET & EAT</h1>

      <button onClick={() => setLoginSignup('login')}>
        <h2>LOG IN</h2>
      </button>

      <button onClick={() => setLoginSignup('signup')}>
        <h2>SIGN UP</h2>
      </button>

      {loginSignup === 'login' && <Login />}
      {loginSignup === 'signup' && <SignUp />}
    </>
  );
};

export default LogInSignUp;
