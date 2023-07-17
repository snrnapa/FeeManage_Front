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



  

  function FilterNowMonth(){
    refflg = refflg + 1;
    const startday = new Date();
    const endday = new Date();

    startday.setDate(1);

    endday.setMonth(endday.getMonth() + 1);
    endday.setDate(0);

    const Start = fees.filter((fee) =>  startday.toISOString().split('T')[0] < fee.use_date);
    const filterdfees = Start.filter((fee) =>  endday.toISOString().split('T')[0] > fee.use_date);

    setFees(filterdfees);
  }


  function FilterLastMonth(){
    refflg = refflg + 1;



    const startday = new Date();
    const endday = new Date();

    
    startday.setMonth(startday.getMonth() - 1);
    startday.setDate(1);
    endday.setDate(0);



    const Start = fees.filter((fee) =>  startday.toISOString().split('T')[0] < fee.use_date);
    const filterdfees = Start.filter((fee) =>  endday.toISOString().split('T')[0] > fee.use_date);

    setFees(filterdfees);
  }




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

  <ToggleButton onClick={FilterNowMonth} value="android">先月</ToggleButton>
  <ToggleButton  onClick={FilterLastMonth} value="web">今月</ToggleButton>
  <ToggleButton value="ios">来月</ToggleButton>
</ToggleButtonGroup>
    
    
    
    </>
  )
}

export default FilterMonth