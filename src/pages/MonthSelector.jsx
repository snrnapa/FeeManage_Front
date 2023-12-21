import { Title } from '@mui/icons-material'
import { Button, Card, ToggleButton, ToggleButtonGroup } from '@mui/material'
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong'

import React from 'react'

const MonthSelector = (props) => {
  const handlePropsTargetMonth = (event) => {
    props.handleTargetMonth(event.y)
  }

  //   const testConsole = () => {
  //     console.log(props.yearMonth)
  //   }

  return (
    <div>
      {/* <Button onClick={testConsole}>テストボタン</Button> */}
      <Card variant="outlined">
        <Title>
          <CenterFocusStrongIcon fontSize="large" />
          Selected : {props.targetMonth}{' '}
        </Title>

        {!(typeof props.yearMonth === 'undefined') ? (
          <ToggleButtonGroup color="primary" exclusive aria-label="Platform">
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
      </Card>
    </div>
  )
}

export default MonthSelector
