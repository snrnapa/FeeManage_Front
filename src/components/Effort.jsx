import React, { useState, useEffect, useLayoutEffect } from "react";

import AccessTimeIcon from '@mui/icons-material/AccessTime';

import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography

} from "@material-ui/core";
import { Button } from "@mui/material";


const Effort = (props) => {

  const targeteffort = props.effort;

  const targetday = props.day;

  const targetWorker = props.targetWorker;


  return (
    <>
    {(() => {

      if (!(typeof targeteffort === 'undefined') && !(typeof targetday === 'undefined')) {



        const neweffort = targeteffort.filter((efo) => {
          return efo.atdate == targetday && efo.id == targetWorker
        })

        return(
          <div>


            
    
              <Card variant="outlined">
                <CardHeader title="Effort"
                            avatar={
                              <Avatar>
                                  <AccessTimeIcon></AccessTimeIcon>
                              </Avatar>
                            }>
                </CardHeader>
                        {neweffort.map((result) => (
                  <CardContent>
                      <Typography variant="h6" color="primary">
                        {"作業時間  " + result.workstart + " ~ " + result.workend}
                      </Typography>




                      <Typography variant="h7" color="primary">
                        {result.projno + " : " + result.projectname}
                      </Typography>

                      <br></br>


                      <Typography variant="h7" color="inherit">
                        {result.customerid + " : " + result.customername}
                      </Typography>

                      <br></br>




                      <Typography variant="h7" color="inherit">
                        {"PL  " + result.leaderid + " : " + result.leadername}

                      </Typography>

                    </CardContent>



                        ))}
 
              </Card>

          </div>



        )

      }
    })()}

  </>
  );
};

export default Effort;
