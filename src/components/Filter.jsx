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
    // console.log(key);
  }



  const depttest = () =>{
    console.log(props.workers);
  }
  return (
    <>

        <FilterAltIcon fontSize="large"/>


        <ButtonGroup>

            <Button
                    href="#"
                    onClick={() => handleClick('ALL')}
            
            >
                ALL
            </Button>


            <Button
                    href="#"
                    onClick={() => handleClick('PPU')}
                    >
                PPU
            </Button>

            <Button
                    href="#"
                    onClick={() => handleClick('HHB')}
                    >
                HHB
            </Button>



        </ButtonGroup>



      <ButtonGroup>

{/* {props.workers.map((worker) => (
  <Button onClick={handleClick.bind(null, {worker.dept})} >team</Button>
))} */}


</ButtonGroup>




      <Button onClick={depttest}>ボタンやわ</Button>
        <hr/>

        
        
    </>
  )
}


export default Filter;