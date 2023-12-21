import * as React from 'react'

import { useState, useEffect, useRef } from 'react'
import Filter from './Filter'
import { Button, ButtonBase, ButtonGroup, Input } from '@mui/material'
import InputWorker from './InputWorker'
import { DataGrid } from '@mui/x-data-grid'
import { Avatar, Card, CardContent, CardHeader, Grid } from '@material-ui/core'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import PeopleIcon from '@mui/icons-material/People'

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

  const ChangeTargetWorker = (e) => {
    console.log(e.id)
    props.HandleTargetWorker(e.id)
  }

  useEffect(() => {
    fetch('http://localhost:8080/', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        setWorkers(data)
      })
  }, [refflg])

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardHeader
              subheader="所属でフィルターをかけます"
              avatar={
                <Avatar>
                  <FilterAltIcon></FilterAltIcon>
                </Avatar>
              }
            ></CardHeader>
            <CardContent>
              <Filter
                onChange={handleFilterChange}
                value={filter}
                workers={workers}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={4}>
          <Card variant="outlined">
            <CardHeader
              subheader="従業員を追加します"
              avatar={
                <Avatar>
                  <PersonAddAltIcon></PersonAddAltIcon>
                </Avatar>
              }
            ></CardHeader>
            <CardContent>
              <InputWorker refflg={refflg} setRefflg={setRefflg} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={1}></Grid>

        <Grid item xs={7}>
          <Card variant="outlined">
            <CardHeader
              subheader="ダブルクリックすると、従業員の詳細を表示します"
              avatar={
                <Avatar>
                  <PeopleIcon></PeopleIcon>
                </Avatar>
              }
            ></CardHeader>
            <CardContent>
              <DataGrid
                rows={DisplayWorkers}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 7 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                onCellDoubleClick={(event) => ChangeTargetWorker(event)}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Worker
