import { useCallback, useEffect, useState } from "react";
import React from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLogged: false,
  login(token, expirationTime) {},
  logout() {},
});

const calculateRemainingTime = (expTime) => {
  const currTime = new Date().getTime();
  const adjExpirationTime = new Date(expTime).getTime();

  const remainingDuration = adjExpirationTime - currTime;

  return remainingDuration;
};

const retreiveStoredToken = () => {
  //if i will log in < minute, and token has the same action - getting it from local storage
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {

  const tokenData = retreiveStoredToken();

  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);
  const isLogged = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  });

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(()=>{
    if(tokenData){
        logoutTimer = setTimeout(logoutHandler, tokenData.duration)
    }
  },[tokenData,logoutHandler])

  //time is changing but token not?

  const contextValue = {
    token: token,
    isLogged: isLogged,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
