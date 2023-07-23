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

  const targetfee = props.fee;

  const targetday = props.day;

  const targetWorker = props.targetWorker;


  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };  




  return (
    <>


    {(() => {


      if (!(typeof targetfee === 'undefined') && !(typeof targetday === 'undefined') ) {
        const newfee = targetfee.filter((f) => {
          return f.use_date == targetday && f.id == targetWorker
        })

        return(
          <div>

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


          {newfee.map((result) => (


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

          </div>

        )


      }
    })()}


  </>
  );
};

export default Fee;
