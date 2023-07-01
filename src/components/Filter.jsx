import React from 'react'
import classNames from 'classnames';

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

    Filter機能

    <a
        href="#"
        onClick={handleClick.bind(null, 'ALL')}
        className={classNames({ 'is-active': value === 'ALL' })}
      >All</a>

      <a
        href="#"
        onClick={handleClick.bind(null, 'PPU')}
        className={classNames({ 'is-active': value === 'PPU' })}
      >PPU</a>

      <a
        href="#"
        onClick={handleClick.bind(null, 'HHB')}
        className={classNames({ 'is-active': value === 'HHB' })}
      >Done</a>
        
        
        
        
    </>
  )
}


export default Filter;