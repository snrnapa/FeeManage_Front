import React from 'react'
import { Button } from '@mui/material';

const AttendanceRecord = () => {

    const MonthDays = () => {

        let d = new Date();
        d.setDate(1);

        let end = new Date();
        let endmonth = end.getMonth() + 1;
        // console.log(endmonth);

        // console.log(end.getMonth());

        while(d.getMonth() != endmonth){
            console.log(d);
            d.setDate(d.getDate() + 1);

        }



        // start.setDate(1);
        // console.log(start);

        

        
        // let end = new Date();
        // end.setMonth(end.getMonth() + 1);
        // end.setDate(0);


        // console.log("付き始めは" + start + "付き終わりは" + end);

    }





  return (
    <>

<Button onClick={MonthDays}>日付を出すで</Button>

    </>
  )
}

export default AttendanceRecord