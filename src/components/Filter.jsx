import React from 'react'
import classNames from 'classnames';
import { Button, ButtonGroup } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export const Filter = (props) => {

    // propsを定義  
  const { value, onChange } = props;
  // フィルターの切り替え
  const handleClick = (key, event) => {
    event.preventDefault();
    onChange(key);
    // console.log(key);
  }
  return (
    <>

        <FilterAltIcon fontSize="large"/>


        <ButtonGroup>

            <Button
                    href="#"
                    onClick={handleClick.bind(null, 'ALL')}
            
            >
                ALL
            </Button>

            <Button
                    href="#"
                    onClick={handleClick.bind(null, 'PPU')}
                    >
                PPU
            </Button>

            <Button
                    href="#"
                    onClick={handleClick.bind(null, 'HHB')}
                    >
                HHB
            </Button>



        </ButtonGroup>

        <hr/>

        
        
    </>
  )
}


export default Filter;