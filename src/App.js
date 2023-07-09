import "./App.css";
import ApiFetch from "./components/ApiFetch";
import Worker from "./components/Worker";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";



import AttendanceRecord from "./components/AttendanceRecord";

const App = () => {

  const [targetWorker , setTargetWorker] = useState();
  const HandleTargetWorker = (oneworker) => {
    setTargetWorker(oneworker)
  };
  const [fees , setFees] = useState();

  function testfunction(){
    console.log(fees);
  }


  const HandleFeeProps = (newfees) => {
    setFees(newfees);

  }

  return (
    <>

      <Button onClick={testfunction}>ぼたんやで</Button>


      <Worker HandleTargetWorker={HandleTargetWorker}/>

      
      <hr />



      {  targetWorker > 0 
      ? <AttendanceRecord targetWorker={targetWorker}/>
      : null
    }


    {  targetWorker > 0 
      ? <ApiFetch targetWorker={targetWorker} HandleFeeProps={HandleFeeProps}/>
      : null
    }



    </>
  );
}

export default App;
