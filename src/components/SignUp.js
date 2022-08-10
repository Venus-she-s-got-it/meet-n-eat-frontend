import React from 'react';
import { Button } from 'react-bootstrap'

const SignUp = () => {
  return (
    <div>
      <div className='container'>
        <form style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:"center"}} action=''>
          <input style={{marginBottom:'2%', border:'1px solid #D6300F', borderRadius:'5px', padding:'4px'}} type='text' placeholder='Username'></input>
          <input style={{marginBottom:'2%', border:'1px solid #D6300F', borderRadius:'5px', padding:'4px'}} type='password' placeholder='Password'></input>
          <input style={{marginBottom:'2%', border:'1px solid #D6300F', borderRadius:'5px', padding:'4px'}} type='password' placeholder='Confirm Password'></input>
          <input style={{marginBottom:'2%', border:'1px solid #D6300F', borderRadius:'5px', padding:'4px'}} type='text' placeholder='Email'></input>
          <Button style={{borderRadius:'5px', backgroundColor:'#D6300F', color:'white', borderColor:'#D6300F'}} type='submit' variant="primary">Submit</Button>{' '}
        </form>
      </div>
      </div>
  );
};

export default SignUp;
