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
    const targetWorker = props.targetWorker;
    const [yearmonth , setYearmonth] = useState([]);

    useEffect(() => {

      
        // 現在の月の、日付をすべて出力します。
      
      if(!(typeof fee === 'undefined') ){




                const d = new Date();
                d.setDate(1);
                let end = new Date();
                let endmonth = end.getMonth() + 1;
                const dates = new Object();
          
                while(d.getMonth() != endmonth){
                    days.push((new Date(d)).toISOString().substring(0,10));
                    d.setDate(d.getDate() + 1);
                }
          
                setTargetdays(days);
                // console.log("飛ばしてないほうだよ")

      }else{
          // 処理を何も行わない




      }

    },[fee]);







    const listtest = () =>{
      const m = [];

      const d = new Date();
      d.setMonth(-6);



      for (let i = 0; i < 12; i++) {
        const devd = new Date(d.setMonth(d.getMonth()+1))
        // console.log(testday.toISOString().substring(0,10));

        m.push(devd)


        
      }
      console.log(m);





    }
  return (
    <>
            
        <Button onClick={listtest}>リストのテストボタン屋で</Button>




      {(() => {
        // fee,targetdaysの値が格納されてない状態で処理が走るとエラーとなるため、変数が設定されてない状態では処理をしないように記述
        if (!(typeof fee === 'undefined') && !(typeof targetdays === 'undefined') ) {

          // console.log(fee[0])

          return (

            <div>



                {targetdays.map((d) => (
                  <div>
                    <h2>{d}</h2>
                    <Fee fee={fee} day={d} targetWorker={targetWorker}/>

                  </div>
                ))}




            </div>
          )



          



          
        }else{
                    // 処理を何も行わない


        }
      })(

        
      )}










    






    </>
  )
}

export default AttendanceRecord