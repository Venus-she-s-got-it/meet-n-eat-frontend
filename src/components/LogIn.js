import { Button } from 'react-bootstrap'

const LogIn = () => {


    const url = ""
  return (
    <div>
      <div className='container'>
        <form style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:"center"}} action=''>
            <input style={{marginBottom:'2%', border:'1px solid #D6300F', borderRadius:'5px', padding:'4px'}} type='text' placeholder='Username'></input>
            <input style={{marginBottom:'2%', border:'1px solid #D6300F', borderRadius:'5px', padding:'4px'}} type='password' placeholder='Password'></input>
            <Button style={{borderRadius:'5px', backgroundColor:'#D6300F', color:'white', borderColor:'#D6300F'}} type='submit' variant="primary">Submit</Button>{' '}
        </form>
      </div>
    </div>
  );
};

export default LogIn;
