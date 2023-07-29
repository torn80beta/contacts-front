import { useUser } from 'userContext';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isVerified } = useUser();

  if (isLoggedIn) {
    return <Navigate to={redirectTo} />;
  } else if (!isVerified && !isLoggedIn) {
    return Component;
  } else if (isVerified && redirectTo === '/registrationSuccess') {
    return <Navigate to={'/registrationSuccess'} />;
  } else {
    return Component;
  }

  // return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
