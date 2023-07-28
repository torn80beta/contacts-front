import { NavLink } from 'react-router-dom';

export const BackLink = ({ to, children }) => {
  return <NavLink to={to || '/'}>{children}</NavLink>;
};
