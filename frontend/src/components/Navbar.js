import { Link } from "react-router-dom"
import Arrow from "../images/caret-down-solid.svg"

export default function Navbar() {
    return(
        <nav>
            <h1><Link to="/">USI Tutors</Link></h1>
            <Link>Home</Link>
            <Link>Our Mission</Link>
            <Link>Find a Tutor<img alt="arrow-down" src={Arrow}/></Link>
            <button class="outlineBtn">SignUp</button>
            <hr/>
            <button class="fullBtn">Login</button>
        </nav>
    )
};
