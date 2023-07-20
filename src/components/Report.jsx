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


const Report = (props) => {

  const targetreport = props.report;

  const targetday = props.day;

  const targetWorker = props.targetWorker;


  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  
 

  



  // function FilterNowMonth(){
  //   refflg = refflg + 1;
  //   const startday = new Date();
  //   const endday = new Date();

  //   startday.setDate(1);

  //   endday.setMonth(endday.getMonth() + 1);
  //   endday.setDate(0);

  //   const Start = reports.filter((report) =>  startday.toISOString().split('T')[0] < report.use_date);
  //   const filterdreports = Start.filter((report) =>  endday.toISOString().split('T')[0] > report.use_date);

  //   setReports(filterdreports);
  // }


  // function FilterLastMonth(){
  //   refflg = refflg + 1;



  //   const startday = new Date();
  //   const endday = new Date();

    
  //   startday.setMonth(startday.getMonth() - 1);
  //   startday.setDate(1);
  //   endday.setDate(0);



  //   const Start = reports.filter((report) =>  startday.toISOString().split('T')[0] < report.use_date);
  //   const filterdreports = Start.filter((report) =>  endday.toISOString().split('T')[0] > report.use_date);

  //   setReports(filterdreports);
  // }





  const reporttestfunction = () => {
    console.log(props.report)

  

  }

  




  return (
    <>
    <Title>Report</Title>

    <Button onClick={reporttestfunction}>Reportをテストするぼたんやさかい</Button>

    {(() => {


      if (!(typeof targetreport === 'undefined') && !(typeof targetday === 'undefined') ) {
        const newreport = targetreport.filter((f) => {
          return f.use_date == targetday && f.id == targetWorker
        })

        return(
          <div>

          <Table size="small" >
          <TableHead>
            <TableRow>
              <TableCell>location</TableCell>

              
            </TableRow>
          </TableHead>
          <TableBody>


          {newreport.map((result) => (


            <TableRow key={result.id}>
              <TableCell>{result.location}</TableCell>
   

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

export default Report;
