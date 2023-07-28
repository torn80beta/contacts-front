import { useUser } from 'userContext';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useUser();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
