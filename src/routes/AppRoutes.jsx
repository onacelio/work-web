import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

/* Importações de componentes de layout */
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

/* Importações das páginas */
import Home from "../pages/Home"
import Nacelio from "../pages/Nacelio"
import Davi from "../pages/Davi"
import About from "../pages/About"

export default function AppRoutes() {
    return (
        <Router>
            <NavBar />

            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/nacelio" exact element={<Nacelio />}/>
                <Route path="/davi" exact element={<Davi />}/>
                <Route path="/about" exact element={<About />}/>
            </Routes>

            <Footer />
        </Router>
    )
}