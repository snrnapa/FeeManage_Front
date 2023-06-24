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
<<<<<<< Updated upstream
      <Sidebar />
=======
      Sidebar
        <Sidebar />
>>>>>>> Stashed changes
    </div>



    <hr/>


    <div>
      <App />
    </div>

<<<<<<< Updated upstream
    <div>
      <Test />
    </div>
=======

    <hr/>

    <div>
      Test
      <Test />
    </div>
    <hr/>

      <div>
        Inputer
        <Inputer />
      </div>
    <hr/>

    

>>>>>>> Stashed changes
  </React.StrictMode>
);
