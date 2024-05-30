import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1>
        <Link to="/">EasyTutor</Link>
      </h1>
      <Link>Home</Link>
      <Link>Our Mission</Link>
      <Link>Find a Tutor</Link>
      <button class="outlineBtn">SignUp</button>
      <hr />
      <button class="fullBtn">Login</button>
    </nav>
  );
}
