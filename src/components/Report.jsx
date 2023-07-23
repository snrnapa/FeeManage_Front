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

  return (
    <>

    <Title>Report</Title>


    {(() => {

      if (!(typeof targetreport === 'undefined') && !(typeof targetday === 'undefined')) {



        const newreport = targetreport.filter((repo) => {
          return repo.atdate == targetday && repo.id == targetWorker
        })

        return(
          <div>

          <Table size="small" >
          <TableHead>
            <TableRow>
              <TableCell>location</TableCell>
              <TableCell>duty_time</TableCell>
              <TableCell>rest_time</TableCell>

              
            </TableRow>
          </TableHead>

          <TableBody>
          {newreport.map((result) => (


            <TableRow key={result.id}>
              <TableCell>{result.location}</TableCell>
              <TableCell>{result.workstart} - {result.workend} </TableCell>
              <TableCell>{result.reststart} - {result.end}</TableCell>

   

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
