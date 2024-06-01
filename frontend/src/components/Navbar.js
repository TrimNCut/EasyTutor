import { Link } from "react-router-dom"
import Arrow from "../images/caret-down-solid.svg"
import Logo from "../images/logotransparent.png"

export default function Navbar() {
    return(
        <nav>
            <h1><Link to="/"><img class="navlogo" src={Logo} alt="Logo"/>USI Tutors</Link></h1>
            <Link>Home</Link>
            <Link>Our Mission</Link>
            <Link>Find a Tutor<img alt="arrow-down" src={Arrow}/></Link>
            <button class="outlineBtn">SignUp</button>
            <hr/>
            <button class="fullBtn">Login</button>
        </nav>
    )
};
