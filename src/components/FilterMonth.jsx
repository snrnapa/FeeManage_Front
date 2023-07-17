import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Title from './Title';

const FilterMonth = () => {

    
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };




  return (
    <>
        <Title>Target <CalendarMonthIcon fontSize='large' /> </Title>
    
    

    <ToggleButtonGroup
  color="primary"
  value={alignment}
  exclusive
  onChange={handleChange}
  aria-label="Platform"
>
  {/* <ToggleButton onClick={FilterLastMonth} value="android">先月</ToggleButton>
  <ToggleButton onClick={FilterNowMonth} value="web">今月</ToggleButton> */}
  <ToggleButton  value="android">先月</ToggleButton>
  <ToggleButton  value="web">今月</ToggleButton>
  <ToggleButton value="ios">来月</ToggleButton>
</ToggleButtonGroup>
    
    
    
    </>
  )
}

export default FilterMonth