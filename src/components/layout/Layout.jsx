import NavBar from 'components/navBar/NavBar';
import './layout.scss';
import { Outlet } from 'react-router-dom';
import { useTheme } from 'themeContext';

const Layout = () => {
  const { theme } = useTheme();
  return (
    <div className="main">
      <NavBar />
      {/* <div className="container"> */}
      <div className={`contentContainer theme-${theme}`}>
        <Outlet />
      </div>
      {/* </div> */}

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
