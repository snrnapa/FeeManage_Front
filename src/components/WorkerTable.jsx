import { Avatar, Card, CardContent, CardHeader } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import PeopleIcon from '@mui/icons-material/People'

const WorkerTable = (props) => {
  const ChangeTargetWorker = (e) => {
    props.HandleTargetWorker(e.id)
  }
  return (
    <div>
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
            rows={props.DisplayWorkers}
            columns={props.columns}
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
    </div>
  )
}

export default WorkerTable
