import React from 'react'
import { useState, useEffect } from "react";


const ApiFetch = (props) => {

    const [fees, setFees] = useState([]);
    const [reports, setReports] = useState([]);

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
  
    useEffect(() => {
      // fetch("http://localhost:8080/fee?id=1", { method: "GET" })
      setFees([]);
      setReports([]);
      fetch(FeeGetUrl, { method: "GET" })
        .then(res => res.json())
        .then(feedata => {
            props.HandleFeeProps(feedata);


      })

  
      fetch(ReportGetUrl, { method: "GET" })
        .then(res => res.json())
        .then(reportdata => {
            props.HandleReportProps(reportdata);

      })
      
      
  
      
      
  },[props.targetWorker, refflg]);



  return (
    <div>ApiFetch</div>
  )
}

export default ApiFetch