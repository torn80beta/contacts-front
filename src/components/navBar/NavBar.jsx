import { NavLink } from 'react-router-dom';
import './navBar.scss';

const NavBar = () => {
  return (
    <nav className="navBar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
};

export default NavBar;
