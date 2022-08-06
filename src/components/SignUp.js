import React from 'react';

const SignUp = () => {
  return (
    <>
      <p>sign up component</p>
      <div className='container'>
        <form action=''>
          <input type='text' placeholder='Username'></input>
          <input type='password' placeholder='Password'></input>
          <input type='password' placeholder='Confirm Password'></input>
          <input type='text' placeholder='Email'></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
