import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import LoginContext from "./LoginContext";

const LoginForm = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const LoginCntx = useContext(LoginContext);

  //   const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  //   const switchAuthModeHandler = () => {
  //     setIsLogin((prevState) => !prevState);
  //   };
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // validation
    setIsLoading(true);
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBjkf_wxXjPK_-kLxr4M8ZBXykAgHINIyc";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        LoginCntx.login(data.idToken);
        history.replace("/products");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section>
      <h1>{"Login"}</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef}></input>
        </div>
        <div>
          <label htmlFor="password">Your password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          ></input>
        </div>
        <div>
          {!isLoading && <button>{"Login"}</button>}
          {isLoading && <p>Sending request...</p>}
          {/* <button type="button" onClick={switchAuthModeHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </button> */}
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
