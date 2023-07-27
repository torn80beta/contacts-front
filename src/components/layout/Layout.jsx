import NavBar from 'components/navBar/NavBar';
import './layout.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="main">
      <NavBar />
      {/* <div className="container"> */}
      <div className="contentContainer">
        <Outlet />
      </div>
      {/* </div> */}

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
