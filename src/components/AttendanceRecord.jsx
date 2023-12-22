import React, { useEffect, useState } from 'react'
import Fee from './Fee'
import { Divider, Grid, Paper } from '@material-ui/core'
import Report from './Report'
import { Card, CardHeader } from '@material-ui/core'
import Effort from './Effort'

const AttendanceRecord = (props) => {
  const [targetdays, setTargetdays] = useState([])
  const days = []
  const fee = props.fees
  const report = props.reports
  const effort = props.efforts
  const targetWorker = props.targetWorker
  const targetMonth = props.targetMonth

  // 現在の月の、日付をすべて出力します。
  useEffect(() => {
    if (
      !(typeof fee === 'undefined') &&
      !(typeof report === 'undefined') &&
      !(typeof effort === 'undefined') &&
      !(typeof targetMonth === 'undefined') &&
      !(targetMonth === null)
    ) {
      const d = new Date()
      // 現在のtargetMonthをDateオブジェクトとして作成
      d.setFullYear(targetMonth.substring(0, 4))
      d.setMonth(targetMonth.substring(5, 7) - 1)
      d.setDate(1)

      //現在のtargetMonthより、翌月endを取得する
      let end = new Date(targetMonth)
      end.setMonth(end.getMonth() + 1)

      //現在の月(d)を１日から取得し、targetDaysの追加していく。
      //１日取得するごとに、dは１ずつ加算。
      // dの月とendの月が一致するまで繰り返す
      while (d.getMonth() != end.getMonth()) {
        days.push(new Date(d).toISOString().substring(0, 10))
        d.setDate(d.getDate() + 1)
      }
      setTargetdays(days)
    } else {
      // propsのどれかが反映されてなければすべて処理を行わない
    }
  }, [fee, targetMonth, report, effort])

  return (
    <>
      {!(typeof fee === 'undefined') &&
      !(typeof targetdays === 'undefined') &&
      !(typeof report === 'undefined') &&
      !(typeof effort === 'undefined') ? (
        <Card>
          <h3>WokerId: {targetWorker}</h3>
          {targetdays.map((d) => (
            // eslint-disable-next-line react/jsx-key
            <Card variant="outlined">
              <CardHeader title={d}></CardHeader>
              <Grid container direction="row">
                <Grid item xs={4}>
                  <Grid container direction="column">
                    <Grid item xs={12}>
                      <Fee fee={fee} day={d} targetWorker={targetWorker} />
                    </Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}>
                      <Report
                        report={report}
                        day={d}
                        targetWorker={targetWorker}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={1}></Grid>

                <Grid item xs={7}>
                  <Effort effort={effort} day={d} targetWorker={targetWorker} />
                </Grid>
              </Grid>
              <Divider />
            </Card>
          ))}
        </Card>
      ) : (
        'ユーザーと日付を選択してください'
      )}
    </>
  )
}

export default AttendanceRecord
