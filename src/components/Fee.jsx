import React, { useState, useEffect, useLayoutEffect } from "react";
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Button, ButtonBase, Input, Select } from '@mui/material';
import { ButtonGroup } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const Fee = (props) => {
  const [fees, setFees] = useState([]);
  const refflg = 0;
  const filtermonths = ([]);



  // 0埋問題を解消するために、データ型に変更したあとに、再度String型に変換している
  const d = new Date(props.targetday);
  const newTargetday = d.toLocaleDateString();

  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  
  const GetUrl = 'http://localhost:8080/fee?id=' + props.targetWorker;

  useEffect(() => {
    // fetch("http://localhost:8080/fee?id=1", { method: "GET" })
    setFees([]);
    fetch(GetUrl, { method: "GET" })
      .then(res => res.json())
      .then(data => {
        setFees(data)


        // data.map((fees) =>{

        //   const newTargetday = (props.targetday).replace(/ , /g , "-");
        //   console.log(newTargetday);

        //   fees.filter((fees))


        // }
        
        // )


    })



    
    
},[props.targetWorker, refflg]);

  



  // function FilterNowMonth(){
  //   refflg = refflg + 1;
  //   const startday = new Date();
  //   const endday = new Date();

  //   startday.setDate(1);

  //   endday.setMonth(endday.getMonth() + 1);
  //   endday.setDate(0);

  //   const Start = fees.filter((fee) =>  startday.toISOString().split('T')[0] < fee.use_date);
  //   const filterdfees = Start.filter((fee) =>  endday.toISOString().split('T')[0] > fee.use_date);

  //   setFees(filterdfees);
  // }


  // function FilterLastMonth(){
  //   refflg = refflg + 1;



  //   const startday = new Date();
  //   const endday = new Date();

    
  //   startday.setMonth(startday.getMonth() - 1);
  //   startday.setDate(1);
  //   endday.setDate(0);



  //   const Start = fees.filter((fee) =>  startday.toISOString().split('T')[0] < fee.use_date);
  //   const filterdfees = Start.filter((fee) =>  endday.toISOString().split('T')[0] > fee.use_date);

  //   setFees(filterdfees);
  // }





  const feetestfunction = () => {

    // console.log(newTargetday);

    fees.forEach((fee) => console.log(fee))

    // fees.map(f => 

    //   f.filter(rf => (new Date(rf.use_date)).toLocaleDateString() === newTargetday ).forEach(rf => console.log(rf))
        
    //   })



      // console.log((new Date(f.use_date)).toLocaleDateString())
      
      // )

    // const newfee = fees.filter(feeresult => feeresult.use_date === newTargetday)
    // console.log(newfee)
    




    // const testfees =  fees.filter((fee) => fee.use_date = newTargetday);

    // console.log(testfees);

    // console.log(newTargetday);
    // console.log(fees[0].use_date);


    // const date = new Date(fees[0].use_date);
    // console.log(date);
    // console.log(date.toLocaleString()); // 2022/5/5 0:00:00 <-日本標準時で出力

  }
  




  return (
    <>
    <Title>Fee</Title>

    <Button onClick={feetestfunction}>Feeをテストするぼたんやさかい</Button>



{/* 
    <ToggleButtonGroup
  color="primary"
  value={alignment}
  exclusive
  onChange={handleChange}
  aria-label="Platform"
>
  <ToggleButton onClick={FilterLastMonth} value="android">先月</ToggleButton>
  <ToggleButton onClick={FilterNowMonth} value="web">今月</ToggleButton>
  <ToggleButton value="ios">来月</ToggleButton>
</ToggleButtonGroup> */}



<Table size="small" >
      <TableHead>
        <TableRow>
          <TableCell>UserID</TableCell>
          <TableCell>Fee_seq</TableCell>
          <TableCell>Round_trip</TableCell>
          <TableCell>total_fee</TableCell>
          <TableCell>use_date</TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>


        {fees.map((result) => (


          <TableRow key={result.id}>
          <TableCell>{result.id}</TableCell>
          <TableCell>{result.fee_seq}</TableCell>
          <TableCell>{result.round_trip}</TableCell>
          <TableCell>{result.total_fee}</TableCell>
          <TableCell>{result.use_date}</TableCell>

        </TableRow>
        ))}
                </TableBody>
                </Table>





  </>
  );
};

export default Fee;
