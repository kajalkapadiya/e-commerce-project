import { useContext, useRef } from "react";
import AuthContext from "./AuthContext";
import { useHistory } from "react-router-dom";

const AuthProfile = () => {
  const history = useHistory();
  const newPassWordInputRef = useRef();
  const authCntx = useContext(AuthContext);
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPassWordInputRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBjkf_wxXjPK_-kLxr4M8ZBXykAgHINIyc",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCntx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      history.replace();
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPassWordInputRef}
        ></input>
      </div>
      <div>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default AuthProfile;
