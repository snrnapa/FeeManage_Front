import { useState } from "react";
import "./App.css";
import Fee from "./components/Fee";
import Worker from "./components/Worker";
import { Button } from "@mui/material";
import AttendanceRecord from "./components/AttendanceRecord";

const App = () => {

  const [targetWorker , setTargetWorker] = useState();
  const HandleTargetWorker = (oneworker) => {
    setTargetWorker(oneworker)
  };

  function testfunction(){
    console.log(targetWorker);
  }

  return (
    <>

      <Button onClick={testfunction}>ぼたんやで</Button>


      <Worker HandleTargetWorker={HandleTargetWorker}/>

      
      <hr />


<AttendanceRecord/>

      {  targetWorker > 0 
      ? <Fee targetWorker={targetWorker}/>
      : null
    }



    </>
  );
}

export default App;
