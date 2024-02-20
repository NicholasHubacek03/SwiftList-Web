import { NavLink } from "react-router-dom"
import '/src/css/Navbar.css'
const Navbar: React.FC = () => {
      return (
            <nav className="navbar">
              <NavLink to="/HomePage" className="nav-link">HomePage</NavLink>
              <NavLink to="/Login" className="nav-link">Login</NavLink>
              <NavLink to="/AboutUs" className="nav-link">AboutUs</NavLink>
              <NavLink to="/Register" className="nav-link">Register</NavLink>
              <NavLink to="/Dashboard" className="nav-link">Dashboard</NavLink>
            </nav>
      ); 
    }
export default Navbar