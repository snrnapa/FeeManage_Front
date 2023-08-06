import React, { useState, useEffect, useLayoutEffect } from "react";

import WorkIcon from '@mui/icons-material/Work';

import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  Input

} from "@material-ui/core";
import { Button } from "@mui/material";


const Report = (props) => {

  const targetreport = props.report;

  const targetday = props.day;

  const targetWorker = props.targetWorker;

  const [editflg , setEditflg] = useState(false);


  const testonclick = (e) => {

    const targeteditflg = editflg;


    setEditflg(!targeteditflg);
    console.log(editflg)
  }

  return (
    <>


    {(() => {

      if (!(typeof targetreport === 'undefined') && !(typeof targetday === 'undefined')) {



        const newreport = targetreport.filter((repo) => {
          return repo.atdate == targetday && repo.id == targetWorker
        })

        return(
          <div>
    
              <Card variant="outlined">
                <CardHeader title="Report"
                            avatar={
                              <Avatar>
                                  <WorkIcon></WorkIcon>
                              </Avatar>
                            }>
                </CardHeader>
                        {newreport.map((result) => (
                  <CardContent>
                      {/* <Typography variant="h5" color="primary">
                        {result.location}
                      </Typography> */}
                        <Button onClick={() => testonclick(result)}>

                          <Typography variant="h5" color="primary">
                            {result.location}
                          </Typography>


                        </Button>
                        
                      <Typography variant="h6" color="textSecondary">
                        {result.workstart + " ~ " + result.workend}

                      </Typography>

                      <Typography variant="h6" color="textSecondary" >

                         {"(" + result.reststart + " ~ " + result.restend + ")"}
                      </Typography>

                          <div>
                            { editflg ?
                            <div>
                              <Input id="location" name="location" placeholder={result.location} />
                              <Input id="workstart" name="workstart" placeholder={"workstart: " + result.workstart} />
                              <Input id="workend" name="workend" placeholder={"workend: " + result.workend}/>
                              <Input id="reststart" name="reststart" placeholder={"reststart: " + result.reststart} />
                              <Input id="restend" name="restend" placeholder={"restend: " + result.restend} />

                            </div>
                            : null }
                          </div>



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

export default Report;
