

const LogIn = () => {


    const url = ""
  return (
    <>
      <p>log in component</p>
      <div className='container'>
        <form>
            <input type='text' placeholder='Username'></input>
            <input type='password' placeholder='Password'></input>
            <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default LogIn;
