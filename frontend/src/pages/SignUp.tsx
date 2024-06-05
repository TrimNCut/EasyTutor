import {useState} from 'react';

export default function SignUp() {
  const [teacher, setTeacher] = useState(false);
  const [user, setUser] = useState(false);

  function uploadForm() {
    const email = (document.getElementById('authsignupusername') as HTMLInputElement)?.value;
    const username = (document.getElementById('authsignupusername') as HTMLInputElement)?.value;
    const password1 = (document.getElementById('authsignuppasswordone') as HTMLInputElement)?.value;
    const password2 = (document.getElementById('authsignuppasswordtwo') as HTMLInputElement)?.value;
    const errtext = document.getElementsByClassName('authconerror')[0];

    if (email.includes('@') === true && email.includes('.') === true) {
      if (username.length >= 5) {
        if (username.includes(' ') === false) {
          if (password1.length >= 8) {
            if (password1.includes(' ') === false) {
              if (password1 === password2) {
                if ((teacher === true && user === false) || (teacher === false && user === true)) {
                  errtext.innerHTML = '';
                } else {
                  errtext.innerHTML = 'Choose an account type';
                }
              } else {
                errtext.innerHTML = 'Passwords do not match';
              }
            } else {
              errtext.innerHTML = 'Password cannot contain space(s)';
            }
          } else {
            errtext.innerHTML = 'Password must be 8 characters or longer';
          }
        } else {
          errtext.innerHTML = 'Username cannot contain space(s)';
        }
      } else {
        errtext.innerHTML = 'Username must be 5 characters or longer';
      }
    } else {
      errtext.innerHTML = 'Invalid Email Address';
    }
  }

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
          <input type='email' placeholder='Your Mail' id='authsignupemail' />
        </div>
        <div className='authcondiv'>
          <img src='/user-solid-dark.svg' alt='usericon' className='authconsideimg' />
          <input type='text' placeholder='Username' id='authsignupusername' />
        </div>
        <div className='authcondiv'>
          <img src='/key-solid.svg' alt='usericon' className='authconsideimg' />
          <input type='password' placeholder='Password' id='authsignuppasswordone' />
        </div>
        <div className='authcondiv'>
          <img src='/key-solid.svg' alt='usericon' className='authconsideimg' />
          <input type='password' placeholder='Confirm Password' id='authsignuppasswordtwo' />
        </div>
        <p>Register as:</p>
        <div className='authcondiv'>
          <button
            className='authconoptions authparents'
            type='button'
            onClick={() => {
              setUser(true);
              teacher ? setTeacher(false) : setTeacher(false);
            }}
          >
            <img src='/user-solid.svg' alt='For Parents' />
          </button>
          <button
            className='authconoptions authteachers'
            type='button'
            onClick={() => {
              setTeacher(true);
              user ? setUser(false) : setUser(false);
            }}
          >
            <img src='/chalkboard-user-solid.svg' alt='For Parents' />
          </button>
        </div>
        <div className='authcondiv'>
          <button className='authconsubmit' type='submit' onClick={() => uploadForm()}>
            Sign Up
          </button>
        </div>
        <p className='authconerror'></p>
      </div>
    </div>
  );
}
