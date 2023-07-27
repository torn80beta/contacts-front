import { createContext, useContext, useState } from 'react';
import { userLogin } from 'api/userApi';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

  const logIn = async () => {
    const userData = await userLogin();
    const { email } = userData.user;
    // const { token } = userData;
    // console.log(token);
    setIsLoggedIn(true);
    setUsername(email);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUsername(null);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, username, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
