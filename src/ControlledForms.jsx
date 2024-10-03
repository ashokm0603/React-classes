import React, { Component } from "react";
import "./formstyle.css";
class ControlledForms extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      dob: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("NAME :", this.state.name);
    console.log("EMAIL :", this.state.email);
    console.log("PASSWORD :", this.state.password);
    console.log("DOB :", this.state.dob);
    sessionStorage.setItem("name", this.state.name);
    sessionStorage.setItem("email", this.state.email);
    sessionStorage.setItem("password", this.state.password);
    sessionStorage.setItem("dob", this.state.dob);
  };
  render() {
    return (
      <div>
        <form action="">
          <fieldset>
            <label htmlFor="">NAME : </label>
            <input
              type="text"
              placeholder="Enter name"
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />{" "}
            <br />
            <br />
            <label htmlFor="">Email ID :</label>
            <input
              type="email"
              placeholder="abc@gmail"
              onChange={(a) => {
                this.setState({ email: a.target.value });
              }}
            />
            <br />
            <br />
            <label htmlFor="">DOB :</label>
            <input
              type="date"
              onChange={(e) => {
                this.setState({ dob: e.target.value });
              }}
            />
            <br />
            <br />
            <label htmlFor="">PassWord: </label>
            <input
              type="password"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />{" "}
            <br />
            <br />
            <button onClick={this.handleSubmit}>Submit</button>
            <button>Cancel</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default ControlledForms;
