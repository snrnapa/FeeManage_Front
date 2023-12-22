import React, { useEffect, useState } from 'react'
import { Button, Table, ButtonGroup } from '@mui/material'

import Fee from './Fee'
import { QrCodeScannerOutlined } from '@mui/icons-material'
import { Grid } from '@material-ui/core'
import Report from './Report'
import { Card, CardHeader, Avatar } from '@material-ui/core'
import TrainIcon from '@mui/icons-material/Train'
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
      {(() => {
        // fee,targetdaysの値が格納されてない状態で処理が走るとエラーとなるため、変数が設定されてない状態では処理をしないように記述
        if (
          !(typeof fee === 'undefined') &&
          !(typeof targetdays === 'undefined') &&
          !(typeof report === 'undefined') &&
          !(typeof effort === 'undefined')
        ) {
          return (
            <div>
              {targetdays.map((d) => (
                <div>
                  <Card variant="outlined">
                    <CardHeader
                      title={d}
                      subheader="入力OK or 入力NG"
                    ></CardHeader>

                    <Grid
                      container
                      direction="row"
                      alignContent="center"
                      justifyContent="center"
                    >
                      <Grid item xs={2}>
                        <Fee fee={fee} day={d} targetWorker={targetWorker} />
                      </Grid>
                      {/* 幅調整用に追加した */}
                      <Grid item xs={1}></Grid>

                      <Grid item xs={3}>
                        <Report
                          report={report}
                          day={d}
                          targetWorker={targetWorker}
                        />
                      </Grid>
                      {/* 幅調整用に追加した */}
                      <Grid item xs={1}></Grid>

                      <Grid item xs={5}>
                        <Effort
                          effort={effort}
                          day={d}
                          targetWorker={targetWorker}
                        />
                      </Grid>
                    </Grid>
                  </Card>
                </div>
              ))}
            </div>
          )
        } else {
          // 処理を何も行わない
        }
      })()}
    </>
  )
}

export default AttendanceRecord
