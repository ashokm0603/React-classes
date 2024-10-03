import React, { useRef } from "react";
import "./formstyle.css";
const UncontrolledForms = () => {
  let nameRef = useRef("");
  let emailRef = useRef("");
  let passRef = useRef("");
  let dobRef = useRef("");
  let handleSubmit = (e) => {
    e.preventDefault();
    let name = nameRef.current.value;
    let email = emailRef.current.value;
    let password = passRef.current.value;
    let dob = dobRef.current.value;
    console.log(
      "Name: " +
        name +
        " Email: " +
        email +
        " Password:" +
        password +
        " Dob:" +
        dob
    );
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
    sessionStorage.setItem("dob", dob);
  };
  return (
    <div>
      <form action="">
        <fieldset>
          <label htmlFor="">NAME : </label>
          <input type="text" placeholder="Enter name" ref={nameRef} />
          <br />
          <br />
          <label htmlFor="">Email ID :</label>
          <input type="email" ref={emailRef} />
          <br />
          <br />
          <label htmlFor="">DOB :</label>
          <input type="date" ref={dobRef} />
          <br />
          <br />
          <label htmlFor="">PassWord: </label>
          <input type="password" ref={passRef} />
          <br />
          <br />
          <button onClick={handleSubmit}>Submit</button>
          <button>Cancel</button>
        </fieldset>
      </form>
    </div>
  );
};

export default UncontrolledForms;
