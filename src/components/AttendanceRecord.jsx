import React, { useEffect, useState } from 'react'
import { Button, Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Fee from './Fee';
import { QrCodeScannerOutlined } from '@mui/icons-material';

const AttendanceRecord = (props) => {

    const [targetdays , setTargetdays] = useState([]);
    const days = [];
    const fee = props.fees;

    useEffect(() => {

      
        // 現在の月の、日付をすべて出力します。
      
      if(!(typeof fee === 'undefined') ){

        
        
                const d = new Date();
                d.setDate(1);
                let end = new Date();
                let endmonth = end.getMonth() + 1;
                const dates = new Object();
          
                while(d.getMonth() != endmonth){
                    days.push((new Date(d)).toLocaleDateString());
                    d.setDate(d.getDate() + 1);
                }
          
                setTargetdays(days);
                // console.log("飛ばしてないほうだよ")

      }else{
          // 処理を何も行わない




      }

    },[fee]);







    const listtest = () =>{
        console.log(fee);
    }
  return (
    <>



      {(() => {
        if (!(typeof fee === 'undefined') && !(typeof targetdays === 'undefined') ) {

          // console.log(fee[0])
          
          const targetfee = fee.filter((f) => {
            return f.use_date == '2023-06-27'
          });

          console.log(targetfee)
          
        }else{
                    // 処理を何も行わない


        }
      })(

        
      )}





      <Button onClick={listtest}>リストのテストボタン屋で</Button>





    






    </>
  )
}

export default AttendanceRecord