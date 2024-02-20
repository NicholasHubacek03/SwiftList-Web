import { NavLink } from "react-router-dom"

const Navbar: React.FC = () => {
      return (
            <nav>
              <NavLink to="/HomePage">HomePage</NavLink>
              <NavLink to="/Login">Login</NavLink>
              <NavLink to="/AboutUs">AboutUs</NavLink>
              <NavLink to="/Register">Register</NavLink>
              <NavLink to="/Dashboard">Dashboard</NavLink>
            </nav>
      ); 
    }
export default Navbar