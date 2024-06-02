import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Arrow from '../images/caret-down-solid.svg';
import Logo from '../images/logotransparent.png';

export default function Navbar() {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav>
        <h1>
          <Link to='/'>
            <img className='navlogo' src={Logo} alt='Logo' />
            USI Tutors
          </Link>
        </h1>
        <Link to='/'>Home</Link>
        <Link to='/'>Our Mission</Link>
        <Link to='/'>Become a Tutor</Link>
        <Link
          to='#'
          className='navdropdown'
          onClick={() => {
            setDropdown(!dropdown);
          }}
        >
          Find a Tutor
          <img alt='arrow-down' src={Arrow} />
        </Link>
        <button
          type='button'
          className='outlineBtn'
          onClick={() => {
            navigate('/signup');
          }}
        >
          SignUp
        </button>
        <hr />
        <button type='button' className='fullBtn'>
          Login
        </button>
      </nav>
      <div className={`dropdowndetails ${dropdown ? 'dropdowndetailsactive' : ''}`}>
        <div>
          <h1>Class Tutors</h1>
          <p>Primary</p>
          <p>Junior Secondary</p>
          <p>Senior Secondary</p>
        </div>
        <div>
          <h1>Subject Tutors</h1>
          <p>English</p>
          <p>Mathematics</p>
          <p>Basic Science</p>
          <hr />
          <p>Physics</p>
          <p>Biology</p>
          <p>Chemistry</p>
          <p>Others</p>
        </div>
        <div>
          <h1>Prep Tutors</h1>
          <p>SAT</p>
          <p>IGCSE</p>
          <p>JAMB</p>
          <p>WASSCE</p>
          <p>Others</p>
        </div>
      </div>
    </>
  );
}
