import './App.css'
import ApiFetch from './components/ApiFetch'
import { useState, useEffect } from 'react'
import React from 'react'
import { Card, CardHeader } from '@material-ui/core/'
import { Grid } from '@material-ui/core'
import AttendanceRecord from './components/AttendanceRecord'
import Worker from './components/Worker'

import MonthSelector from './pages/MonthSelector'

const App = () => {
  const [targetWorker, setTargetWorker] = useState()
  const [yearMonth, setYearMonth] = useState([])
  const [targetMonth, setTargetMonth] = useState(null)
  const [fees, setFees] = useState()
  const [reports, setReports] = useState()
  const [efforts, setEfforts] = useState()

  const [alignment, setAlignment] = useState('2023-02')

  const HandleTargetWorker = (oneworker) => {
    setTargetWorker(oneworker)
  }

  const handleTargetMonth = (elem) => {
    setTargetMonth(elem)
  }

  useEffect(() => {
    const m = []
    const d = new Date()
    d.setMonth(d.getMonth() - 6)

    for (let i = 0; i < 12; i++) {
      const devd = new Date(d.setMonth(d.getMonth() + 1))
      // console.log(testday.toISOString().substring(0,10));
      m.push(devd.toISOString().substring(0, 7))
    }
    setYearMonth(m)
  }, [])

  const HandleFeeProps = (newfees) => {
    setFees(newfees)
  }

  const HandleReportProps = (newreport) => {
    setReports(newreport)
  }

  const HandleEffortProps = (neweffort) => {
    setEfforts(neweffort)
  }

  return (
    <div>
      <h2>
        Selected Month:{' '}
        {targetMonth === null ? 'Non Selected Month' : targetMonth}{' '}
      </h2>

      <Grid container>
        <Grid item xs={12}>
          <MonthSelector
            handleTargetMonth={handleTargetMonth}
            yearMonth={yearMonth}
          />
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <Card variant="outlined">
              <CardHeader></CardHeader>
              <Worker HandleTargetWorker={HandleTargetWorker} />
            </Card>
            <hr />
            {/* workerの情報をダブルクリックすると、targetWorkerがセットされ、こちらのAPIが実行される（Fee情報をバックから取る処理） */}
            {targetWorker > 0 ? (
              <ApiFetch
                targetWorker={targetWorker}
                HandleFeeProps={HandleFeeProps}
                HandleReportProps={HandleReportProps}
                HandleEffortProps={HandleEffortProps}
              />
            ) : null}
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            {targetWorker > 0 ? (
              <AttendanceRecord
                fees={fees}
                reports={reports}
                efforts={efforts}
                targetWorker={targetWorker}
                targetMonth={targetMonth}
              />
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
