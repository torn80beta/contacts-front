import { NavLink } from 'react-router-dom';
import './navBar.scss';
import { useUser } from 'userContext';
// import { userLogin } from 'api/userApi';

const NavBar = () => {
  const { isLoggedIn, username, logIn, logOut } = useUser();

  return (
    <nav className="navBar">
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <p>{username}</p>}
      {isLoggedIn ? (
        <div>
          <button onClick={logOut}>Log out</button>
          <NavLink to="/contacts">Contacts</NavLink>
        </div>
      ) : (
        <div>
          <button onClick={logIn}>Log in</button>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
