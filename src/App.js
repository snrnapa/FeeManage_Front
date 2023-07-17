import "./App.css";
import ApiFetch from "./components/ApiFetch";
import Worker from "./components/Worker";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";




import AttendanceRecord from "./components/AttendanceRecord";
import FilterMonth from "./components/FilterMonth";

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

      <FilterMonth />

      <Worker HandleTargetWorker={HandleTargetWorker}/>

      
      <hr />


      {/* workerの情報をダブルクリックすると、targetWorkerがセットされ、こちらのAPIが実行される（Fee情報をバックから取る処理） */}
      {  targetWorker > 0 
        ? <ApiFetch targetWorker={targetWorker} HandleFeeProps={HandleFeeProps}/>
        : null
      }


      {  targetWorker > 0 
      ? <AttendanceRecord fees={fees} targetWorker={targetWorker}/>
      : null
    }




    </>
  );
}

export default App;
