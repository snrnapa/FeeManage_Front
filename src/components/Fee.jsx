import React, { useState, useEffect, useLayoutEffect } from "react";
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Typography from "@mui/material/Typography";
import TrainIcon from '@mui/icons-material/Train';

import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";




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


      if (!(typeof targetfee === 'undefined') && !(typeof targetday === 'undefined')) {
   
        const newfee = targetfee.filter((f) => {
          return f.use_date == targetday && f.id == targetWorker
        })

        if(!(newfee == 0)){

          let sumfee = 0;

          for (let i = 0; i < newfee.length; i++) {
            sumfee += newfee[i].total_fee;
            
          }
          console.log(sumfee);







            return(
              <div>
    
                <Card variant="outlined">
                  <CardHeader title="Fee"
                              avatar={
                                <Avatar>
                                    <TrainIcon></TrainIcon>
                                </Avatar>
                              }>
                  </CardHeader>
                  <CardContent>
                  <List component="nav">
    
                      
                      
                      {newfee.map((result) => (
    
                          <ListItem>
                            <ListItemText primary={"料金:" + result.total_fee} />
    
                            {result.round_trip == "yes"
                            ? <ListItemText primary={"往復"} />
                            : <ListItemText primary={"片道"} />
                            }


        
                          </ListItem>
    
                          
                      ))}
                      <ListItemText primary={"合計:" + sumfee} />

    
                    </List>
    
                  </CardContent>
    
                </Card>
    
              </div>
    
            )



        }


      }
    })()}


  </>
  );
};

export default Fee;
