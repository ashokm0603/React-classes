import React from "react";
import { Component } from "react";
import Child from "./Child";
class Parent extends Component {
  render() {
    return (
      <div>
        <h1 align="center">Emp 1</h1>
        <Child
          empdetails={{ empname: "raghu", empid: 100, emprole: "developer" }}
        />
        <hr />
        <h1 align="center">Emp 2</h1>
        <Child
          empdetails={{ empname: "ravi", empid: 200, emprole: "tester" }}
        />
      </div>
    );
  }
}
export default Parent;
