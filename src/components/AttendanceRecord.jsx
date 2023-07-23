import React, { useEffect, useState } from 'react'
import { Button, Table, ButtonGroup, CardHeader } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Fee from './Fee';
import { QrCodeScannerOutlined } from '@mui/icons-material';
import { Grid } from '@material-ui/core';
import Report from './Report';
import Card from '@material-ui/core/Card';


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

      {(() => {
        // fee,targetdaysの値が格納されてない状態で処理が走るとエラーとなるため、変数が設定されてない状態では処理をしないように記述
        if (!(typeof fee === 'undefined') && !(typeof targetdays === 'undefined') && !(typeof report === 'undefined')) {

          return (
            <div>
                {targetdays.map((d) => (
                  <div>

                  <Card variant="outlined">
                    <CardHeader title={d} subheader="入力OK or 入力NG">

                    </CardHeader>

                      <Grid container 
                        direction="row"
                        alignContent="center"
                        justifyContent="center"
                      >


                        <Grid item xs={6}>
                          <Card variant="outlined">
                            <CardHeader title="Fee">

                            </CardHeader>
                            <Fee fee={fee} day={d} targetWorker={targetWorker}/>
                          </Card>
                        </Grid>


                        <Grid item xs={4}>
                          <Card variant="outlined">
                            <CardHeader title="Report">

                            </CardHeader>
                            <Report report={report} day={d} targetWorker={targetWorker}/>
                          </Card>
                        </Grid>


                      </Grid>
                  </Card>
       
                </div>
                ))}
            </div>
          )
        }else{
                    // 処理を何も行わない
        }
      })()}




    </>
  )
}

export default AttendanceRecord