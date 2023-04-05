import React, { useContext } from 'react'
import SmallIcon from '../tests/SmallIcon'
import Popover from '@mui/material/Popover';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Context } from '../..';


export default function SearchForm() {
  
  const {user} = useContext(Context)
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
          <FormGroup>
            <FormControlLabel control={<Checkbox  sx={{ color: "#808080", "margin-right": "10px", '&.Mui-checked': {color: "#B0C7DD"}}}/>} label="Все тесты" className="option__text" />
            <FormControlLabel control={<Checkbox  sx={{ color: "#808080","margin-right": "10px", '&.Mui-checked': {color: "#B0C7DD"}}}/>} label="Видимые" className="option__text"/>
            <FormControlLabel control={<Checkbox sx={{ color: "#808080", "margin-right": "10px", '&.Mui-checked': {color: "#B0C7DD"}}} />} label="Скрытые" className="option__text"/>
          </FormGroup>
          </div>
          <div className="option__container" >
          <FormGroup>
            {user._types.map(temp => <FormControlLabel control={<Checkbox sx={{ color: "#808080","margin-right": "10px", '&.Mui-checked': {color: "#B0C7DD"}}}/>} label={temp.name} className="option__text"/>)}
          </FormGroup>
          </div>
          </div>
      </Popover>
        
    </div>
  )
}
