import React from 'react'
import { useState, useEffect } from "react";


const ApiFetch = (props) => {

    const [fees, setFees] = useState([]);
    const refflg = 0;
    const filtermonths = ([]);
  
  
  
    // 0埋問題を解消するために、データ型に変更したあとに、再度String型に変換している
    const d = new Date(props.targetday);
    const newTargetday = d.toLocaleDateString();


    const [alignment, setAlignment] = React.useState('web');
  
    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
  
    
    const GetUrl = 'http://localhost:8080/fee?id=' + props.targetWorker;
  
    useEffect(() => {
      // fetch("http://localhost:8080/fee?id=1", { method: "GET" })
      setFees([]);
      fetch(GetUrl, { method: "GET" })
        .then(res => res.json())
        .then(data => {
            props.HandleFeeProps(data);

      })
  
  
  
      
      
  },[props.targetWorker, refflg]);



  return (
    <div>ApiFetch</div>
  )
}

export default ApiFetch