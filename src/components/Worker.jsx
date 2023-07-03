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
import { DataGrid } from '@mui/x-data-grid';
import PersonIcon from '@mui/icons-material/Person';


function preventDefault(event) {
  event.preventDefault();
}

  export default Worker = (props) => {




    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'first_name', headerName: 'First name', width: 100 },
      { field: 'last_name', headerName: 'Last name', width: 100 },
      {
        field: 'dept',
        headerName: 'dept',
        width: 150,
      },
      {
        field: 'team',
        headerName: 'team',
        width: 150,
      },
      // {
      //   field: 'fullName',
      //   headerName: 'Full name',
      //   description: 'This column has a value getter and is not sortable.',
      //   sortable: false,
      //   width: 160,
      //   valueGetter: (params) =>
      //     `${params.workers.first_name || ''} ${params.workers.last_name || ''}`,
      // },
    ];





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
    if (filter === worker.dept) return worker.dept == worker.dept
    if (filter === 'ALL') return true;
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






      <InputWorker refflg={refflg} setRefflg={setRefflg}/>


      <Filter
        onChange={handleFilterChange}
        value={filter}
        workers = {workers}
      />

      <Title>UserList       <PersonIcon fontSize='large'/></Title>









      <DataGrid
        rows={DisplayWorkers}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 7 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />






    </>
  );
}
