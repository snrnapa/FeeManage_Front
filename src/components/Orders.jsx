import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useState , useEffect, useRef} from 'react';
import Fee from './Fee';
import { Button, ButtonBase, Input } from '@mui/material';

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const [workers , setWorkers] = useState([]);
  const [toggle , setToggle] = useState(false);
  const [targetid , setTargetid] =useState();
  // const [targetmonth , setTargetmonth] = useState([]);

    const months = ([]);
    const d =  new Date();
    d.setMonth(d.getMonth()-2);


    for(let i = 1; i<12; i++){
  
      d.setMonth(d.getMonth()+1);
      console.log(d);
      months.push(d);

    }



  
  
  
  // useEffect(() => {
  //   const months = ([]);
  //   let d =  new Date();
  //   d.setMonth(d.getMonth()-2);


  //   for(let i = 1; i<12; i++){
  
  //     d.setMonth(d.getMonth()+1);
  //     console.log(d);
  //     months.push(d);

  //   }

  // },[]);





  function logdate(){
    console.log(months);
  }
  
  
  // function logdate(){
  //     let d =  new Date();
  //     for(let i = -2; i<13; i++){

  //       d.setMonth(d.getMonth()+i);
  //       console.log(d);

  //       const addtargetmonth = () => {
  //         setTargetmonth([...targetmonth,d])
  //       }
  //     }

  //     // let inputstringdate = "2024/07/01";
  //     // let inputdate = new Date(inputstringdate);
  //     // let syoudate = new Date(2022/1/1);
  //     // console.log(d);

  //     // if(inputdate > d){
  //     //   console.log("trueですよ")
  //     // }

  //     // console.log(
  //     //   y '/');
  //   }




    function TargetChange(props){
      setToggle(true);
      console.log(props.id);
      setTargetid(props.id);

    }

    useEffect(() => {


        fetch("http://localhost:8080/", { method: "GET" })
          .then(res => res.json())
          .then(data => {
            setWorkers(data);
     
          })
        },[]);
        
        
    // useEffect(() => {
    //   console.log(workers);

    // },[workers])
        
        // let result = workers.find((worker) => worker.id === 5);
        // console.log(result);

  return (
    <>



      <Title>User List</Title>
      <Table size="small" >
        <TableHead>
          <TableRow>
            <TableCell>UserId</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Dept/Team</TableCell>
            <TableCell>Button</TableCell>




          </TableRow>
        </TableHead>
        <TableBody>
          {workers.map((worker) => (
            <TableRow key={worker.id}>
              <TableCell>{worker.id}</TableCell>
              <TableCell>{worker.first_name} {worker.last_name}</TableCell>
              <TableCell>{worker.dept} / {worker.team}</TableCell>
              <TableCell> 
                 <Button onClick={() => TargetChange(worker)} >Detail</Button> 
                
                </TableCell>




            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>

    {/* <select>
      {targetmonth.map((targetmonth) => {
        return <option>{targetmonth.getFullyear()}</option>;
      })}
      
    </select> */}

    <Button onClick={logdate}>日付ログ</Button>


    {toggle
    ? <Fee targetworker={targetid}/>
    : null}
    


    </>
  );
}