import React from 'react'
import { Button } from '@mui/material';

const AttendanceRecord = () => {

    // 現在の月の、日付をすべて出力します。
    const MonthDays = () => {

        const d = new Date();
        d.setDate(1);

        let end = new Date();
        let endmonth = end.getMonth() + 1;

        const days = [];

        while(d.getMonth() != endmonth){
            
            days.push(new Date(d));
            d.setDate(d.getDate() + 1);
        }

        console.log(days);




    }





  return (
    <>

<Button onClick={MonthDays}>日付を出すで</Button>

    </>
  )
}

export default AttendanceRecord