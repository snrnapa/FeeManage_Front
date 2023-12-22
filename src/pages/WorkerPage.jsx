import * as React from 'react'

import { useState, useEffect } from 'react'
import Filter from '../components/worker/Filter'
import InputWorker from '../components/worker/InputWorker'
import { Box, Grid, Typography, colors } from '@material-ui/core'
import WorkerTable from '../components/worker/WorkerTable'

const WorkerPage = (props) => {
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

  const [workers, setWorkers] = useState([])
  // const [targetWorker , setTargetWorker] = props;
  const [filter, setFilter] = useState('ALL')
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
      <Box padding="5px" margin="5px">
        <Typography variant="h5" color="primary">
          Worker Pages
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Filter
              onChange={handleFilterChange}
              value={filter}
              workers={workers}
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <InputWorker refflg={refflg} setRefflg={setRefflg} />
          </Grid>
        </Grid>

        <Grid item xs={1}></Grid>

        <Grid item xs={12}>
          <WorkerTable
            DisplayWorkers={DisplayWorkers}
            columns={columns}
            HandleTargetWorker={props.HandleTargetWorker}
          />
        </Grid>
      </Box>
    </div>
  )
}

export default WorkerPage
