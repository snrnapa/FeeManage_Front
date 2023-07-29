import React, { useEffect } from 'react'
import classNames from 'classnames';
import { Button, ButtonGroup } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useState } from 'react';
import Title from './Title';

export const Filter = (props) => {

    // propsを定義  
  const { value, onChange } = props;
  const [depts , setDepts] = useState([]);
  // フィルターの切り替え
  const handleClick = (key) => {
    
    onChange(key);
  }



  useEffect(() => {

    let deptlist = [];
        
    let newworkers = props.workers;

    newworkers.map((worker) => {
      if(!deptlist.includes(worker.dept)){
        deptlist.push(worker.dept);
      }
    })
    setDepts(deptlist);
  },[props.workers])


  const distincttest = () => {

    console.log(depts);
    console.log(props.workers);

  }


  return (
    <>


      <ButtonGroup>

        {depts.map((dept) => (
          <Button onClick={() => handleClick(dept)}> {dept} </Button>
        ))}

      </ButtonGroup>

      <Button onClick={() => handleClick("ALL")}> Clear </Button>

    </>
  )
}


export default Filter;