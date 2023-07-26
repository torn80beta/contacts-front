// import logo from './logo.svg';
import './App.scss';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from 'pages/home/Home';
import Register from 'pages/home/register/Register';
import Login from 'pages/login/Login';
import NavBar from 'components/navBar/NavBar';
import Contacts from 'pages/contacts/Contacts';

function App() {
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

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        // loader: rootLoader,
        children: [
          {
            path: '/',
            element: <Home />,
            // loader: teamLoader,
          },
          {
            path: '/login',
            element: <Login />,
            // loader: teamLoader,
          },
          {
            path: '/register',
            element: <Register />,
            // loader: teamLoader,
          },
          {
            path: '/contacts',
            element: <Contacts />,
            // loader: teamLoader,
          },
        ],
      },
    ],
    {
      basename: '/contacts-front',
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
