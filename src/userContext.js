import { createContext, useContext, useState } from 'react';
import { userLogin } from 'api/userApi';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

  const logIn = async inputValues => {
    try {
      const userData = await userLogin(inputValues);
      const { email } = userData.user;
      // const { token } = userData;
      // console.log(token);
      setIsLoggedIn(true);
      setUsername(email);
      // console.log(userData);
      localStorage.setItem('user', JSON.stringify(userData.user));
    } catch (error) {
      return error.message;
    }
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUsername(null);
    localStorage.removeItem('user');
  };

  const refreshUser = name => {
    setIsLoggedIn(true);
    setUsername(name);
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, username, logIn, logOut, refreshUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
