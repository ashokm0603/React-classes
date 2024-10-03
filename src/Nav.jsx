import React, { Component } from "react";
import "./style.css";
class Nav extends Component {
  render() {
    return (
      <nav>
        <ol
          style={{
            color: "red",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            background: "powderblue",
            height: "90px",
            listStyle: "none",
          }}
        >
          <li>HOME</li>
          <li>ABOUT </li>
          <li>LOGIN</li>
          <li>CONTACT</li>
        </ol>
      </nav>
    );
  }
}
export default Nav;
