import React, { useEffect, useState } from 'react'
import { Button, Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const AttendanceRecord = () => {

    const [targetdays , setTargetdays] = useState();
    
    useEffect(() => {



         // 現在の月の、日付をすべて出力します。
        const d = new Date();
        d.setDate(1);

        let end = new Date();
        let endmonth = end.getMonth() + 1;

        const days = [];

        while(d.getMonth() != endmonth){
            
            days.push((new Date(d)).toLocaleDateString());
            d.setDate(d.getDate() + 1);
        }

        setTargetdays(days);

        console.log(targetdays);



    },[]);








  return (
    <>

<Button >日付を出すで</Button>

<Table size="small" >
      <TableHead>
        <TableRow>
          <TableCell>日時</TableCell>





        </TableRow>
      </TableHead>
      <TableBody>

        {targetdays.map((days) => (


            <TableRow key={targetdays} >
            <TableCell>{days}</TableCell>

            </TableRow>

        ))}


      </TableBody>
    </Table>


    </>
  )
}

export default AttendanceRecord