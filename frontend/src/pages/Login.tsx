export default function Login() {
  return (
    <div className='authconlogin'>
      <div className='authconleft'>
        <img src='/teacherandchild.jpeg' alt='teacherandchild' />
      </div>
      <div className='authconright authconloginright'>
        <h1>Welcome Back!</h1>
        <hr />
        <div className='authcondiv'>
          <img src='/envelope-solid.svg' alt='envelopeicon' className='authconsideimg' />
          <input type='email' placeholder='Your Mail' />
        </div>
        <div className='authcondiv'>
          <img src='/key-solid.svg' alt='usericon' className='authconsideimg' />
          <input type='text' placeholder='Password' />
        </div>
        <div className='authcondiv'>
          <button className='authconsubmit' type='submit'>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
