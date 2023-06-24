import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Test from "./Test";
import Inputer from "./Inputer";
import Sidebar from "./components/Sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>


    <div>

      <Sidebar />

    </div>



    <hr/>


    <div>
      <App />
    </div>


    <div>
      <Test />
    </div>

  </React.StrictMode>
);
