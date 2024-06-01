import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Arrow from "../images/caret-down-solid.svg"
import Logo from "../images/logotransparent.png"

export default function Navbar() {
    const navigate = useNavigate()
    return(
        <nav>
            <h1><Link to="/"><img className="navlogo" src={Logo} alt="Logo"/>USI Tutors</Link></h1>
            <Link>Home</Link>
            <Link>Our Mission</Link>
            <Link>Find a Tutor<img alt="arrow-down" src={Arrow}/></Link>
            <button className="outlineBtn" onClick={() => {navigate("/signup")}}>SignUp</button>
            <hr/>
            <button className="fullBtn">Login</button>
        </nav>
    )
};
