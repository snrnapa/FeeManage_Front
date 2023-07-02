import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useState , useEffect, useRef} from 'react';
import Filter from './Filter'
import Fee from './Fee';
import { Button, ButtonBase, ButtonGroup, Input } from '@mui/material';
import InputWorker from './InputWorker';
import Dashboard from '../Dashbord';

function preventDefault(event) {
  event.preventDefault();
}

  export default Worker = (props) => {





  // ランダムなキーを取得
  const getKey = () => Math.random().toString(32).substring(2);

  const [workers , setWorkers] = useState([]);
  // const [targetWorker , setTargetWorker] = props;
  const [filter , setFilter] = useState('ALL');
  const [allfilters , setAllfilters] = useState();
  const [refflg , setRefflg] = useState(0);

    // フィルターの切り替え
  const handleFilterChange = value => setFilter(value);





  useEffect(() =>{

    
    
    console.log(props);
      
  },[workers])

  const DisplayWorkers = workers.filter(worker => {
    if (filter === 'ALL') return true;
    if (filter === 'PPU') return worker.dept == 'PPU';
    if (filter === 'HHB') return worker.dept == 'HHB';
  })

  const ChangeTargetWorker = (worker) => {
    const oneworker = worker;
    props.HandleTargetWorker(oneworker);
  }


  // const [targetid , setTargetid] =useState();




    // function TargetChange(props){
    //   setToggle(true);
    //   console.log(props.id);
    //   setTargetid(props.id);

    // }

    useEffect(() => {


        fetch("http://localhost:8080/", { method: "GET" })
          .then(res => res.json())
          .then(data => {
            setWorkers(data);
     
          })
        },[refflg]);
        
  return (
    <>



      <Title>User List</Title>

      <InputWorker refflg={refflg} setRefflg={setRefflg}/>

      <ButtonGroup>

        {workers.map((worker) => (
          <Button>{worker.dept}</Button>
        ))}


      </ButtonGroup>


      <Filter
        onChange={handleFilterChange}
        value={filter}
        workers = {workers}
      />

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
          {DisplayWorkers.map((worker) => (
            <TableRow key={worker.id}>
              <TableCell>{worker.id}</TableCell>
              <TableCell>{worker.first_name} {worker.last_name}</TableCell>
              <TableCell>{worker.dept} / {worker.team}</TableCell>
              <TableCell> 
                 <Button onClick={() => ChangeTargetWorker(worker.id)} >Detail</Button> 
                
                </TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>




    </>
  );
}
