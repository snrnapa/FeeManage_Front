import React from 'react'
import classNames from 'classnames';
import { Button, ButtonGroup } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export const Filter = (props) => {

    // propsを定義  
  const { value, onChange } = props;
  // フィルターの切り替え
  const handleClick = (key) => {
    
    onChange(key);
  }


  return (
    <>

        <FilterAltIcon fontSize="large"/>

      <ButtonGroup>

        {props.workers.map((worker) => (
          <Button onClick={() => handleClick(worker.dept)}> {worker.dept} </Button>
        ))}

      </ButtonGroup>



        
    </>
  )
}


export default Filter;