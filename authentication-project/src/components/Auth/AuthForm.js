import { useState, useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setIsLoading] = useState(false);
  const [error,setError] = useState('')

  const authCtx = useContext(AuthContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const fetchingData = async (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBXvbv4ighpchcJyUgMhVXySHyVqCgfdt0";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBXvbv4ighpchcJyUgMhVXySHyVqCgfdt0";
    }
    try {
      setIsLoading(true);
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if(!response.ok){
        throw new Error(`Failed ${response.error}`)
      }

      const data = await response.json();

      const expirationTime = new Date(new Date().getTime() + Number(data.expiresIn * 1000))
      // if (!data.ok) {
      //   console.log(data)
      //   throw new Error(`Fetching data failed : ${data.error.message}`);
      // }

      authCtx.login(data.idToken, expirationTime.toISOString());

      setIsLoading(false);
    } catch (error) {
      setError('Login failed')
      alert('Login failed');
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={fetchingData}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailRef} type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input ref={passwordRef} type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          {loading && !error && <p> Loading...</p>}
          {loading && error && <p className = {classes.error}>{error}</p>}
         { !loading && <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
