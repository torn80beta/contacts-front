import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from 'pages/home/Home';
import Register from 'pages/home/register/Register';
import Login from 'pages/login/Login';
import Contacts from 'pages/contacts/Contacts';
import Layout from 'components/layout/Layout';
import { NotFound } from 'pages/NotFound/NotFound';
import { RestrictedRoute } from 'RestrictedRoute';
import { useEffect } from 'react';
import { useUser } from 'userContext';

function App() {
  const { refreshUser } = useUser();

  useEffect(() => {
    document.title = 'Contacts';
  }, []);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      refreshUser(foundUser.email);
    }
  }, [refreshUser]);

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
            element: (
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            ),
            // element: <Login />,
            // loader: teamLoader,
          },
          {
            path: '/register',
            element: (
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            ),
            // element: <Register />,
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
