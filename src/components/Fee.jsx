import React, { useState, useEffect } from "react";
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

const Fee = (props) => {
  const [fees, setFees] = useState([]);
  

  const GetUrl = 'http://localhost:8080/fee?id=' + props.targetworker;

  

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
