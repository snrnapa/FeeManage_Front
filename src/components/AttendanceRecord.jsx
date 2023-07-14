import React, { useEffect, useState } from 'react'
import { Button, Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Fee from './Fee';

const AttendanceRecord = (props) => {

    const [targetdays , setTargetdays] = useState([]);
    const days = [];

    useEffect(() => {
         // 現在の月の、日付をすべて出力します。
        const d = new Date();
        d.setDate(1);
        let end = new Date();
        let endmonth = end.getMonth() + 1;
        const dates = new Object();

        while(d.getMonth() != endmonth){
            days.push((new Date(d)).toLocaleDateString());
            d.setDate(d.getDate() + 1);
        }

        setTargetdays(days);

        console.log(targetdays);
    },[]);


    // const propstest = () =>{
    //     console.log(fees)
    // }
  return (
    <>



{(() => {
        const feemap = new Map();
        feemap.set("hoge", "fuga");
        feemap.set("moimoi", "oboro");


        console.log(feemap.get("hoge"));

    })()}








    </>
  )
}

export default AttendanceRecord