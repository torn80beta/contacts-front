import { NavLink } from 'react-router-dom';
import './navBar.scss';
import { useUser } from 'userContext';
import { useTheme } from 'themeContext';

const NavBar = () => {
  const { isLoggedIn, username, logOut } = useUser();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`navBar theme-${theme}`}>
      <nav className="navigation">
        <NavLink className={'navLink'} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <div>
            <NavLink className={'navLink'} to="/contacts">
              Contacts
            </NavLink>
          </div>
        )}
      </nav>
      <div className="userMenu">
        {isLoggedIn ? (
          <div className="user">
            <p>{username}</p>
            <button onClick={logOut}>Log out</button>
          </div>
        ) : (
          <div className="user">
            <NavLink className={'navLink'} to="/login">
              Login
            </NavLink>
            <NavLink className={'navLink'} to="/register">
              Register
            </NavLink>
          </div>
        )}
        <button onClick={toggleTheme}>
          Apply {theme === 'dark' ? 'light' : 'dark'} theme
        </button>
      </div>
    </header>
  );
};

export default NavBar;
