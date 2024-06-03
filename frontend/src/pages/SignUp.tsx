export default function SignUp() {
  return (
    <div className='authcon'>
      <div className='authconleft'>
        <img src='/teacherandchild.jpeg' alt='teacherandchild' />
      </div>
      <div className='authconright'>
        <h1>Sign Up Today!</h1>
        <hr />
        <div className='authcondiv'>
          <img src='/envelope-solid.svg' alt='envelopeicon' className='authconsideimg' />
          <input type='email' placeholder='Your Mail' />
        </div>
        <div className='authcondiv'>
          <img src='/user-solid-dark.svg' alt='usericon' className='authconsideimg' />
          <input type='text' placeholder='Username' />
        </div>
        <div className='authcondiv'>
          <img src='/key-solid.svg' alt='usericon' className='authconsideimg' />
          <input type='text' placeholder='Password' />
        </div>
        <div className='authcondiv'>
          <img src='/key-solid.svg' alt='usericon' className='authconsideimg' />
          <input type='text' placeholder='Confirm Password' />
        </div>
        <p>Register as:</p>
        <div className='authcondiv'>
          <button className='authconoptions authparents' type='button'>
            <img src='/user-solid.svg' alt='For Parents' />
          </button>
          <button className='authconoptions authteachers' type='button'>
            <img src='/chalkboard-user-solid.svg' alt='For Parents' />
          </button>
        </div>
        <div className='authcondiv'>
          <button className='authconsubmit' type='submit'>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
