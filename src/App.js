import "./App.css";
import ApiFetch from "./components/ApiFetch";
import Worker from "./components/Worker";
import { Button,ButtonGroup } from "@mui/material";
import { useState, useEffect } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from "react";
import Title from "./components/Title";
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';




import AttendanceRecord from "./components/AttendanceRecord";


const App = () => {

  const [targetWorker , setTargetWorker] = useState();
  const [yearmonth , setYearmonth] = useState([]);
  const [targetmonth , setTargetmonth] = useState(null);
  const [fees , setFees] = useState();



  const [alignment, setAlignment] = useState('2023-02')

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };



  const HandleTargetWorker = (oneworker) => {
    setTargetWorker(oneworker)
  };

  const HandleTargetMonth = (e) => {
    setTargetmonth(e.y);
  }



  useEffect(() => {
    const m = [];
    const d = new Date();
    d.setMonth(d.getMonth() -6);

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
          <Title><CenterFocusStrongIcon fontSize='large'/>Selected : {targetmonth}      </Title>
      <Button onClick={testfunction}>ぼたんやで</Button>

      {(() => {
        if(!(typeof yearmonth === 'undefined')){
          return(
            <div>



              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
              >
              {yearmonth.map((y) => (
                <ToggleButton value={y} onClick={() => HandleTargetMonth({y})}>{y}</ToggleButton>
                ))}
              </ToggleButtonGroup>






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
      ? <AttendanceRecord fees={fees} targetWorker={targetWorker} targetmonth={targetmonth}/>
      : null
    }




    </>
  );
}

export default App;
