import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'

import WorkIcon from '@mui/icons-material/Work'

import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  Input,
  ButtonBase,
} from '@material-ui/core'
import { Button, InputBase } from '@mui/material'
import { Label } from '@mui/icons-material'

const Report = (props) => {
  const targetreport = props.report

  const targetday = props.day

  const targetWorker = props.targetWorker

  const [editflg, setEditflg] = useState(false)

  const idRef = useRef(null)
  const atdateRef = useRef(null)
  const locationRef = useRef(null)
  const workstartRef = useRef(null)
  const workendRef = useRef(null)
  const reststartRef = useRef(null)
  const restendRef = useRef(null)

  const testonclick = (e) => {
    const targeteditflg = editflg

    setEditflg(!targeteditflg)
    console.log(editflg)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: idRef.current.value,
        atdate: atdateRef.current.value,
        location: locationRef.current.value,
        workstart: workstartRef.current.value,
        workend: workendRef.current.value,
        reststart: reststartRef.current.value,
        restend: restendRef.current.value,
      }),
    }
    fetch('http://localhost:8080/report', requestOptions)
  }

  return (
    <>
      {(() => {
        if (
          !(typeof targetreport === 'undefined') &&
          !(typeof targetday === 'undefined')
        ) {
          const newreport = targetreport.filter((repo) => {
            return repo.atdate == targetday && repo.id == targetWorker
          })

          return (
            <div>
              <Card variant="outlined">
                <CardHeader
                  title="Report"
                  avatar={
                    <Avatar>
                      <WorkIcon></WorkIcon>
                    </Avatar>
                  }
                ></CardHeader>
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
                      {result.workstart + ' ~ ' + result.workend}
                    </Typography>

                    <Typography variant="h6" color="textSecondary">
                      {'(' + result.reststart + ' ~ ' + result.restend + ')'}
                    </Typography>

                    <div>
                      {editflg ? (
                        <div>
                          <form onSubmit={handleSubmit}>
                            <Input
                              type="hidden"
                              inputRef={idRef}
                              value={targetWorker}
                            />
                            <Input
                              type="hidden"
                              inputRef={atdateRef}
                              value={targetday}
                            />
                            <Input
                              id="location"
                              name="location"
                              placeholder={result.location}
                              inputRef={locationRef}
                            />
                            <Input
                              id="workstart"
                              name="workstart"
                              value={result.workstart}
                              inputRef={workstartRef}
                            />
                            <Input
                              id="workend"
                              name="workend"
                              value={result.workend}
                              inputRef={workendRef}
                            />
                            <Input
                              id="reststart"
                              name="reststart"
                              value={result.restend}
                              inputRef={reststartRef}
                            />
                            <Input
                              id="restend"
                              name="restend"
                              value={result.restend}
                              inputRef={restendRef}
                            />
                            <Button type="submit">Update</Button>
                          </form>
                        </div>
                      ) : null}
                    </div>
                  </CardContent>
                ))}
              </Card>
            </div>
          )
        }
      })()}
    </>
  )
}

export default Report
