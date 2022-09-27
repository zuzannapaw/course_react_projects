import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const authCtx = useContext(AuthContext);
  const passwordRef = useRef();
  const history = useHistory()

  const changePasswordHandler = async (e) => {

    history.replace('/')

    e.preventDefault();
    const newPassword = passwordRef.current.value;

    try {
      const response = fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBXvbv4ighpchcJyUgMhVXySHyVqCgfdt0",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: authCtx.token,
            password: newPassword,
            returnSecureToken: false,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Password change impossible");
      }

      const data = await response.json();
    } catch (err) {}
  };

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={passwordRef} type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <button onClick={changePasswordHandler}>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
