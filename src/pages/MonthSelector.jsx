import { Title } from '@mui/icons-material'
import { Button, Card, ToggleButton, ToggleButtonGroup } from '@mui/material'
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong'
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'

import React, { useEffect, useState } from 'react'

const MonthSelector = (props) => {
  const handlePropsTargetMonth = (event) => {
    props.handleTargetMonth(event.y)
  }

  const [selectMonth, setSelectMonth] = useState()
  let renderCount = 0

  useEffect(() => {
    renderCount++

    console.log(renderCount)

    return () => {}
  }, [])

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          {/* <Button onClick={testConsole}>テストボタン</Button> */}
          <CenterFocusStrongIcon fontSize="large" />
          <h3>Selected : {props.targetMonth} </h3>
          {!(typeof props.yearMonth === 'undefined') ? (
            <ToggleButtonGroup
              color="secondary"
              exclusive
              aria-label="Platform"
              value={selectMonth}
              onChange={(event, newSelectMonth) =>
                // setSelectMonth(newSelectMonth)
                // console.log(newSelectMonth)
                setSelectMonth(newSelectMonth)
              }
            >
              {props.yearMonth.map((y) => (
                <ToggleButton
                  value={y}
                  onClick={() => handlePropsTargetMonth({ y })}
                >
                  {y}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default MonthSelector
