import "./App.css";
import ApiFetch from "./components/ApiFetch";
import Worker from "./components/Worker";
import { Button,ButtonGroup } from "@mui/material";
import { useState, useEffect } from "react";




import AttendanceRecord from "./components/AttendanceRecord";

const App = () => {

  const [targetWorker , setTargetWorker] = useState();
  const [yearmonth , setYearmonth] = useState([]);
  const HandleTargetWorker = (oneworker) => {
    setTargetWorker(oneworker)
  };
  const [fees , setFees] = useState();



  useEffect(() => {
    const m = [];
    const d = new Date();
    d.setMonth(-6);

    for (let i = 0; i < 12; i++) {
      const devd = new Date(d.setMonth(d.getMonth()+1))
      // console.log(testday.toISOString().substring(0,10));
      m.push(devd.toISOString().substring(0,7))

    }
    setYearmonth(m);
  },[])

  function testfunction(){
    console.log(fees);
  }



  const HandleFeeProps = (newfees) => {
    setFees(newfees);

  }

  return (
    <>

      <Button onClick={testfunction}>ぼたんやで</Button>

      {(() => {
        if(!(typeof yearmonth === 'undefined')){
          return(
            <div>

              <ButtonGroup>

                {yearmonth.map((y) => (
                  // <Button onClick={() => handleClick(y)}> {y} </Button>
                  <Button> {y} </Button>

                ))}
        

              </ButtonGroup>
            </div>

          )
        }else{
          // 何もしない
        }
      })()}


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
