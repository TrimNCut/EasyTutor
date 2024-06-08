import {useState} from 'react';

export default function SignUp() {
  const [_accountType, setAccountType] = useState<'user' | 'teacher'>('user');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errorText, setErrorText] = useState('');

  function uploadForm() {
    if (!(username !== '' && email !== '' && password1 !== '' && password2 !== '')) {
      setErrorText('Input fields must not be empty!');
      return;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setErrorText('Invalid Email Address');
      return;
    }
    if (username.length <= 5) {
      setErrorText('Username must be 5 characters or longer');
      return;
    }
    if (!/^[a-zA-Z ]*$/.test(username)) {
      setErrorText('Invalid username entered');
      return;
    }

    if (password1.length <= 8) {
      setErrorText('Password must be 8 characters or longer');
      return;
    }

    if (password1 !== password2) {
      setErrorText('Passwords do not match');
      return;
    }

    setErrorText('');
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
          <img src='/envelope-solid.svg' alt='envelope icon' className='authconsideimg' />
          <input type='email' placeholder='Your Mail' value={email} onChange={({target}) => setEmail(target.value)} />
        </div>
        <div className='authcondiv'>
          <img src='/user-solid-dark.svg' alt='usericon' className='authconsideimg' />
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={({target}) => setUsername(target.value)}
          />
        </div>
        <div className='authcondiv'>
          <img src='/key-solid.svg' alt='usericon' className='authconsideimg' />
          <input
            type='password'
            placeholder='Password'
            value={password1}
            onChange={({target}) => setPassword1(target.value)}
          />
        </div>
        <div className='authcondiv'>
          <img src='/key-solid.svg' alt='usericon' className='authconsideimg' />
          <input
            type='password'
            placeholder='Confirm Password'
            value={password2}
            onChange={({target}) => setPassword2(target.value)}
          />
        </div>
        <p>Register as:</p>
        <div className='authcondiv'>
          <button
            className='authconoptions authparents'
            type='button'
            onClick={() => {
              setAccountType('user');
            }}
          >
            <img src='/user-solid.svg' alt='For Parents' />
          </button>
          <button
            className='authconoptions authteachers'
            type='button'
            onClick={() => {
              setAccountType('teacher');
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
        <p className='authconerror'>{errorText}</p>
      </div>
    </div>
  );
}
