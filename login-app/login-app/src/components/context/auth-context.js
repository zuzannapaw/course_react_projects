import  React from "react"

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout : () => {}
});

//from createContext we get back a object that holds components

export default AuthContext;