import * as React from 'react'

import { useState, useEffect, useRef } from 'react'
import Filter from './Filter'
import { Button, ButtonBase, ButtonGroup, Input } from '@mui/material'
import InputWorker from './InputWorker'
import { DataGrid } from '@mui/x-data-grid'
import { Avatar, Card, CardContent, CardHeader, Grid } from '@material-ui/core'
import PeopleIcon from '@mui/icons-material/People'
import WorkerTable from './WorkerTable'

const Worker = (props) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'first_name', headerName: 'First name', width: 100 },
    { field: 'last_name', headerName: 'Last name', width: 100 },
    {
      field: 'dept',
      headerName: 'dept',
      width: 150,
    },
    {
      field: 'team',
      headerName: 'team',
      width: 150,
    },
  ]

  // ランダムなキーを取得
  const getKey = () => Math.random().toString(32).substring(2)

  const [workers, setWorkers] = useState([])
  // const [targetWorker , setTargetWorker] = props;
  const [filter, setFilter] = useState('ALL')
  const [allfilters, setAllfilters] = useState()
  const [refflg, setRefflg] = useState(0)

  // フィルターの切り替え
  const handleFilterChange = (value) => setFilter(value)

  useEffect(() => {
    console.log(props)
  }, [workers])

  const DisplayWorkers = workers.filter((worker) => {
    if (filter === worker.dept) return worker.dept == worker.dept
    if (filter === 'ALL') return true
  })

  useEffect(() => {
    fetch('http://localhost:8080/', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        setWorkers(data)
      })
  }, [refflg])

  return (
    <div>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Filter
            onChange={handleFilterChange}
            value={filter}
            workers={workers}
          />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={4}>
          <InputWorker refflg={refflg} setRefflg={setRefflg} />
        </Grid>

        <Grid item xs={1}></Grid>

        <Grid item xs={7}>
          <WorkerTable
            DisplayWorkers={DisplayWorkers}
            columns={columns}
            HandleTargetWorker={props.HandleTargetWorker}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Worker
