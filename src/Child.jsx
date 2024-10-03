import React, { Component } from "react";
class Child extends Component {
  render() {
    return (
      <div>
        <h2>EmpName : {this.props.empdetails.empname}</h2>
        <h2>EmpId :{this.props.empdetails.empid}</h2>
        <h2>Emprole :{this.props.empdetails.emprole}</h2>
      </div>
    );
  }
}
export default Child;
