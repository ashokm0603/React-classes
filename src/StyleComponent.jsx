import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function StyleComponent() {
  return (
    <div>
      <button
        onClick={() => {
          toast.warn({ POSITION: "center" }, "warn property");
        }}
      >
        Notify!
      </button>
      <button
        onClick={() => {
          toast.success("success property");
        }}
      >
        {" "}
        Notify!
      </button>
      <ToastContainer />
    </div>
  );
}

export default StyleComponent;
