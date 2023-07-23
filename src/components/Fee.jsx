import React, { useState, useEffect, useLayoutEffect } from "react";
import Typography from "@mui/material/Typography";
import TrainIcon from '@mui/icons-material/Train';

import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
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

                      {newfee.map((result) => (
                        <div>
                          <Typography variant="h6" color="textSecondary">
                            {"料金:" + result.total_fee + "円   "}
                            {result.round_trip == "yes"
                              ? "往復"
                              : "片道"
                          }
                          </Typography>
                        </div>
                      ))}
                      <Divider />
                      <Typography variant="h6" color="primary">
                        {"合計   " + sumfee + "円"}
                      </Typography>

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
