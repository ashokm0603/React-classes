import React, { useRef } from "react";
import "./loginstyle.css";
import { useNavigate } from "react-router";

const LoginPage = () => {
  let homepage = useNavigate();
  let servicespage = useNavigate();

  let usernameRef = useRef("");
  let passRef = useRef("");
  let handleNavigation = (e) => {
    e.preventDefault();
    let name = usernameRef.current.value;
    let password = passRef.current.value;

    if (name === "admin" && password === "1234") {
      homepage("/");
    }
  };
  return (
    <div className="form-container">
      <form action="">
        <label htmlFor="">USERNAME :</label>
        <input type="text" ref={usernameRef} /> <br />
        <br />
        <label htmlFor="">PASSWORD :</label>
        <input type="password" ref={passRef} /> <br />
        <br />
        <button onClick={handleNavigation}>SUBMIT</button>
        <button
          onClick={() => {
            servicespage("/services");
          }}
        >
          CANCEL
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
