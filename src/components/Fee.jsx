import React, { useState, useEffect } from "react";
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


  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  
  

  const GetUrl = 'http://localhost:8080/fee?id=' + props.targetworker;

  
  

  const filtermonths = ([]);
  

  useEffect(() => {
    let d =  new Date();
    d.setMonth(d.getMonth()-2);


    for(let i = 1; i<12; i++){
  
      d.setMonth(d.getMonth()+1);
      console.log(d);
      filtermonths.push(d);

    }

   },[]);

   function logdate(){
    console.log(filtermonths);
   }






  function FilterLastMonth(){
    const startday = new Date();
    const endday = new Date();

    startday.setDate(1);

    endday.setMonth(endday.getMonth() + 1);
    endday.setDate(0);



    const Start = fees.filter((fee) =>  startday.toISOString().split('T')[0] < fee.use_date);
    const filterdfees = Start.filter((fee) =>  endday.toISOString().split('T')[0] > fee.use_date);


    // startday.toISOString().split('T')[0] < fee.use_date < endday.toISOString().split('T')[0]);



    setFees(filterdfees);
  }

  

  useEffect(() => {
    // fetch("http://localhost:8080/fee?id=1", { method: "GET" })
    setFees([]);
    fetch(GetUrl, { method: "GET" })
      .then(res => res.json())
      .then(data => {
        setFees(data)
    })
    
},[props.targetworker]);

  return (
    <>
    <Title>Fee</Title>




    <ToggleButtonGroup
  color="primary"
  value={alignment}
  exclusive
  onChange={handleChange}
  aria-label="Platform"
>
  <ToggleButton　onClick={FilterLastMonth} value="web">先月</ToggleButton>
  <ToggleButton value="android">今月</ToggleButton>
  <ToggleButton value="ios">来月</ToggleButton>
</ToggleButtonGroup>

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
        {fees.map((fee) => (
          <TableRow key={fee.id}>
            <TableCell>{fee.id}</TableCell>
            <TableCell>{fee.fee_seq}</TableCell>
            <TableCell>{fee.round_trip}</TableCell>
            <TableCell>{fee.total_fee}</TableCell>
            <TableCell>{fee.use_date}</TableCell>



          </TableRow>
        ))}
      </TableBody>
    </Table>





    {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
      See more orders
    </Link> */}
  </>
  );
};

export default Fee;
