import React, { useState, useEffect, useLayoutEffect } from "react";

import WorkIcon from '@mui/icons-material/Work';

import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography

} from "@material-ui/core";


const Report = (props) => {

  const targetreport = props.report;

  const targetday = props.day;

  const targetWorker = props.targetWorker;

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
                      <Typography variant="h5" color="primary">
                        {result.location}
                      </Typography>

                      <Typography variant="h6" color="textSecondary">
                        {"勤務時間  " + result.workstart + " ~ " + result.workend}

                      </Typography>

                      <Typography variant="h6" color="textSecondary">

                         {"休憩時間  " + result.reststart + " ~ " + result.restend}
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

export default Report;
