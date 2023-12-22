import React, { useEffect } from 'react'
import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { useState } from 'react'

export const Filter = (props) => {
  // propsを定義
  const { onChange } = props
  const [depts, setDepts] = useState([])
  // フィルターの切り替え
  const handleClick = (key) => {
    onChange(key)
  }

  useEffect(() => {
    let deptlist = []

    let newworkers = props.workers

    newworkers.map((worker) => {
      if (!deptlist.includes(worker.dept)) {
        deptlist.push(worker.dept)
      }
    })
    setDepts(deptlist)
  }, [props.workers])

  return (
    <>
      <Card sx={{ height: 350 }} variant="outlined">
        <CardHeader
          title="所属でフィルターをかけます"
          avatar={
            <Avatar>
              <FilterAltIcon></FilterAltIcon>
            </Avatar>
          }
        ></CardHeader>
        <CardContent>
          <ButtonGroup>
            {depts.map((dept) => (
              // eslint-disable-next-line react/jsx-key
              <Button onClick={() => handleClick(dept)}> {dept} </Button>
            ))}
          </ButtonGroup>

          <Button onClick={() => handleClick('ALL')}> Clear </Button>
        </CardContent>
      </Card>
    </>
  )
}

export default Filter
