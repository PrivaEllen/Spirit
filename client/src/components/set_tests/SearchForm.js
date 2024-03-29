import SmallIcon from '../tests/SmallIcon'
import Popover from '@mui/material/Popover';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Context } from '../..';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import React, { useEffect, useState, useMemo, useContext  } from 'react';
import { observer } from "mobx-react-lite";
import stc from '../../store/SetStore';

const SearchForm = observer((props) => {
  
  const {user, test} = useContext(Context);
  const [value, setValue] = React.useState('all');

  const handleChange = (event) => {
    setValue(event.target.value);
    stc.TestFilter(event.target.value);
  };
  
  useEffect(() => {
    stc._all = test._tests;
  })

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    document.body.style.overflow = "overlay";
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  return (
    <div  className="search">
      <form className="search__form">
            <button type="submit" className='search__button'></button>
            <input type="text" 
            placeholder="Поиск"
            onChange={(e) => stc.searchData(e.target.value)}
            className="search__input"/>
            <button className='close__button'></button>
        </form>
        <SmallIcon onClick={handleClick} title="Тип отображаемых тестов" svg = {
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 12H11V10H7V12ZM0 0V2H18V0H0ZM3 7H15V5H3V7Z"/>
                </svg>                  
        }/>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{ "& .MuiPopover-paper": {background: "none"}}}
        
      >
        <div className="popover-test">
          <div className="option__container">
          <FormControl  onClick={handleChange}>
          <RadioGroup defaultValue={"all"} value={value}>
          <div className='option__container__box' style={{"border-bottom":"1px solid rgba(255, 255, 255, 0.12)"}}>
            <FormControlLabel value="all" control={<Radio  sx={{ color: "#808080", "margin-right": "10px", "margin-left": "16px", '&.Mui-checked': {color: "#B0C7DD"}}}/>} label="Все тесты" className="option__text" />
            
          </div>
          <div className="option__container" >
            {user._types.map(temp => <FormControlLabel value={temp.name} control={<Radio sx={{ color: "#808080", "margin-right": "10px", "margin-left": "16px", '&.Mui-checked': {color: "#B0C7DD"}}} />} label={temp.name} className="option__text"/>)}
            </div>
          </RadioGroup>
          </FormControl>
          </div>
          </div>
      </Popover>
    </div>
    )
})

export default SearchForm
