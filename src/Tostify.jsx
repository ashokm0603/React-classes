import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Tostify = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          height: "500px",
          backgroundColor: "#111111",
          padding: "50px",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => {
            toast.success("success message");
          }}
        >
          click here to success
        </button>

        <button
          onClick={() => {
            toast.warn("warning message");
          }}
        >
          click here to warning
        </button>

        <button
          onClick={() => {
            toast.error("error message");
          }}
        >
          click here to error
        </button>

        <button
          onClick={() => {
            toast.info("info message");
          }}
        >
          click here to info
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Tostify;
