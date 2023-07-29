import React from 'react'
import { useState, useEffect } from "react";


const ApiFetch = (props) => {

    const [fees, setFees] = useState([]);
    const [reports, setReports] = useState([]);
    const [efforts, setEfforts] = useState([]);


    const refflg = 0;
    const filtermonths = ([]);
  
  
  
    // 0埋問題を解消するために、データ型に変更したあとに、再度String型に変換している
    const d = new Date(props.targetday);
    const newTargetday = d.toLocaleDateString();


    const [alignment, setAlignment] = React.useState('web');
  
    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
  
    
    const FeeGetUrl = 'http://localhost:8080/fee?id=' + props.targetWorker;
    const ReportGetUrl = 'http://localhost:8080/report?id=' + props.targetWorker;
    const EffortGetUrl = 'http://localhost:8080/effort?id=' + props.targetWorker;

  
    useEffect(() => {
      // fetch("http://localhost:8080/fee?id=1", { method: "GET" })



      // Feeを取得するJsonをバックエンドのAPIに送信して、値を取得する。

      fetch(FeeGetUrl, { method: "GET" })
        .then(res => res.json())
        .then(feedata => {
            props.HandleFeeProps(feedata);

      })

      // Report（出勤管理）を取得するJsonをバックエンドのAPIに送信して、値を取得する。
      fetch(ReportGetUrl, { method: "GET" })
        .then(res => res.json())
        .then(reportdata => {
            props.HandleReportProps(reportdata);

      })
      
      
        // Effort（工数）を取得するJsonをバックエンドのAPIに送信して、値を取得する。
        fetch(EffortGetUrl, { method: "GET" })
        .then(res => res.json())
        .then(effortdate => {
            props.HandleEffortProps(effortdate);

      })
      
  },[props.targetWorker, refflg]);


}

export default ApiFetch