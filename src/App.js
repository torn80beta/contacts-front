// import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from 'pages/home/Home';
import Register from 'pages/home/register/Register';
import Login from 'pages/login/Login';
import Contacts from 'pages/contacts/Contacts';
import Layout from 'components/layout/Layout';
import { NotFound } from 'pages/NotFound/NotFound';

function App() {
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
      {
        path: '*',
        element: <NotFound />,
      },
    ],
    {
      basename: '/contacts-front',
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
