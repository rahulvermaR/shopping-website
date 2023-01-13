import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../store/store";
import classes from "./LoginPage.module.css";

export default function LogInPage() {
  const haveAcc = useSelector((st) => st.haveAcc);

  const dispatch = useDispatch();
  const inputNameRef = useRef();
  const inputemailRef = useRef();

  const inputPassRef = useRef();
  const SignUpHandler = (e) => {
    e.preventDefault();
    if (!inputNameRef.current.value) return;

    if (inputPassRef.current.value.length < 6) return;

    dispatch(
      pageActions.signup({
        user: inputNameRef.current.value,
        pass: inputPassRef.current.value,
      })
    );

    inputNameRef.current.value = "";
    inputPassRef.current.value = "";
    inputemailRef.current.value = "";
  };
  const dontHaveAccHandler = (e) => {
    e.preventDefault();
    dispatch(pageActions.dontHaveAcc());
  };
  const loginHandler = (e) => {
    e.preventDefault();
    if (!inputNameRef.current.value) return;

    if (inputPassRef.current.value.length < 6) return;

    dispatch(
      pageActions.login({
        user: inputNameRef.current.value,
        pass: inputPassRef.current.value,
      })
    );

    inputNameRef.current.value = "";
    inputPassRef.current.value = "";
    inputemailRef.current.value = "";
  };
  return (
    <section className={classes.loginBox}>
      <form className={classes.formBox}>
        <h1>{haveAcc ? "Login" : "SignUp"}</h1>
        <label htmlFor="name">Enter Your Name</label>
        <input
          type="text"
          id="name"
          ref={inputNameRef}
          placeholder="Enter Your Name"
          required
        />

        <label htmlFor="email">Enter Your Email</label>
        <input
          type="email"
          id="email"
          ref={inputemailRef}
          placeholder="demo@gmail.com"
          required
        />

        <label htmlFor="pasward">Enter Your Password</label>
        <input type="password" id="pasward" required ref={inputPassRef} />
        {haveAcc && (
          <div>
            <button onClick={loginHandler} className={classes.loginBtn}>
              Login
            </button>
            <button onClick={dontHaveAccHandler} className={classes.haveAcc}>
              Don't have account?
            </button>
          </div>
        )}

        {!haveAcc && (
          <button onClick={SignUpHandler} className={classes.loginBtn}>
            {" "}
            SignUp
          </button>
        )}
      </form>
    </section>
  );
}
