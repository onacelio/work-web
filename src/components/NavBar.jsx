import { Link } from "react-router-dom"
import logo from "../assets/logo512.png"

export default function NavBar() {
    return (
        <nav className="flex flex-row justify-between w-full p-5">
            
            <img src={logo} alt="Logo da empresa" className="h-10"/>
            
            <ul className="flex flex-row gap-5">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/nacelio">Nacelio</Link></li>
                <li><Link to="/davi">Davi</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>

        </nav>
    )
}

