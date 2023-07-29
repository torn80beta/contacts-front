import { createContext, useContext, useState } from 'react';
import { userLogin } from 'api/userApi';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const logIn = async inputValues => {
    try {
      const userData = await userLogin(inputValues);
      const { email } = userData.user;
      // const { token } = userData;
      // console.log(token);
      setIsLoggedIn(true);
      setUsername(email);
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

  const verify = async newUser => {
    setIsVerified(true);
    localStorage.setItem(
      'user',
      JSON.stringify({ ...newUser, isVerified: true })
    );
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        username,
        isVerified,
        isRefreshing,
        logIn,
        logOut,
        refreshUser,
        verify,
        setIsRefreshing,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
