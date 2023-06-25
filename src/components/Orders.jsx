import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useState , useEffect } from 'react';
import Fee from './Fee';

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
    const [workers , setWorkers] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8080/", { method: "GET" })
          .then(res => res.json())
          .then(data => {
            setWorkers(data);

          })
        },[]);
        
        // console.log(workers);
        
        
        
            let result = workers.find((worker) => worker.id === 5);
            console.log(result);


  return (
    <>
      <Title>User List</Title>
      <Table size="small" >
        <TableHead>
          <TableRow>
            <TableCell>UserId</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Dept/Team</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {workers.map((worker) => (
            <TableRow key={worker.id}>
              <TableCell>{worker.id}</TableCell>
              <TableCell>{worker.first_name} {worker.last_name}</TableCell>
              <TableCell>{worker.dept} / {worker.team}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>


    </>
  );
}