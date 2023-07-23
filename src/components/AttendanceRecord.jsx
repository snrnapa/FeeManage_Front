import React, { useEffect, useState } from 'react'
import { Button, Table, ButtonGroup } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Fee from './Fee';
import { QrCodeScannerOutlined } from '@mui/icons-material';
import { Grid } from '@material-ui/core';
import Report from './Report';


const AttendanceRecord = (props) => {

    const [targetdays , setTargetdays] = useState([]);
    const days = [];
    const fee = props.fees;
    const report = props.reports;
    const targetWorker = props.targetWorker;
    const [yearmonth , setYearmonth] = useState([]);
    const targetmonth = props.targetmonth;

    useEffect(() => {

      
        // 現在の月の、日付をすべて出力します。
      
      if(!(typeof fee === 'undefined') && !(typeof report === 'undefined')){
        console.log(fee.length)
        console.log(report.length)

        const d = new Date();

        if(!(typeof targetmonth === 'undefined') && !(targetmonth === null)){
          d.setFullYear(targetmonth.substring(0,4));
          d.setMonth(targetmonth.substring(5,7) - 1);


        }


        d.setDate(1);
        let end = new Date(targetmonth);
        let endmonth = end.getMonth() + 1;
        const dates = new Object();
  
        while(d.getMonth() != endmonth){
            days.push((new Date(d)).toISOString().substring(0,10));
            d.setDate(d.getDate() + 1);
        }
  
        setTargetdays(days);


      }else{
          // 処理を何も行わない

      }

    },[fee,targetmonth,report]);

    const reporttest = () =>  {
      console.log(props);
    }


  return (
    <>


    <Button onClick={reporttest}>レポートテストするでattendanceで</Button>


        <Grid container>
          <Grid item xs={6}>


      {(() => {
        // fee,targetdaysの値が格納されてない状態で処理が走るとエラーとなるため、変数が設定されてない状態では処理をしないように記述
        if (!(typeof fee === 'undefined') && !(typeof targetdays === 'undefined') && !(typeof report === 'undefined')) {

          console.log(report);
          console.log(fee);
          return (
            <div>
                {targetdays.map((d) => (
                  <div>
                    <h2>{d}</h2>
                    <Fee fee={fee} day={d} targetWorker={targetWorker}/>
                    <Report report={report} day={d} targetWorker={targetWorker}/>


                  </div>
                ))}

            </div>
          )
        }else{
                    // 処理を何も行わない
        }
      })()}


    </Grid>
  </Grid>


    </>
  )
}

export default AttendanceRecord