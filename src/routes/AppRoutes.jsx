import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Home from "../pages/Home"

export default function AppRoutes() {
    return (
        <Router>
            <NavBar />

            <Routes>
                <Route path="/home" exact element={<Home />}/>
            </Routes>

            <Footer />
        </Router>
    )
}