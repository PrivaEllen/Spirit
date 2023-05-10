import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Popover } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BarChartIcon from '@mui/icons-material/BarChart';
import SyncIcon from '@mui/icons-material/Sync';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useState, useContext} from 'react'; 


export default function UserTest(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [hidden, setHidden] = useState(true);

  return (
    <>
      <div className='pattern-block'>
      <img src={require(`../../../../backend/static/${props.image}`) } alt="The first" className='pattern__photo'></img>
      <div className='pattern-box'><span className='pattern-box__text'>{props.TestName}</span></div>
      <div className='pattern-box'>
      <svg width='24' height='24' viewBox='0 0 22 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M15 6C16.66 6 17.99 4.66 17.99 3C17.99 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 4.66 13.34 6 15 6ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM7 8C4.67 8 0 9.17 0 11.5V14H14V11.5C14 9.17 9.33 8 7 8ZM15 8C14.71 8 14.38 8.02 14.03 8.05C15.19 8.89 16 10.02 16 11.5V14H22V11.5C22 9.17 17.33 8 15 8Z' fill='white' fill-opacity='0.56'/>
        </svg>
        <div className='pattern-box__info'>
          <span className='pattern-box__time'>{props.TestTime}</span>
          <MoreVertIcon onClick={handleClick} color="disabled" />
          <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className='popover__threePoints'>
          <div className='popover__threePoints__block'>
            <BarChartIcon color="disabled" sx={{ fontSize: 24, 'margin-left': 16, 'margin-right': 32  }}/>
            <div className='popover__threePoints__block__text'>Статистика</div>
          </div>
          <div className='popover__threePoints__block'>
            <SyncIcon color="disabled" sx={{ fontSize: 24, 'margin-left': 16, 'margin-right': 32  }}/>
            <div className='popover__threePoints__block__text'>Сменить имя</div>
          </div>
        
            {!hidden ? <div className='popover__threePoints__block'> <VisibilityIcon color="disabled" sx={{ fontSize: 24, 'margin-left': 16, 'margin-right': 32  }} onClick={() => setHidden(s => !s)}/>
              <div className='popover__threePoints__block__text'>Вернуть</div></div>
            : null}
            {hidden ? <div className='popover__threePoints__block'> <VisibilityOffIcon color="disabled" sx={{ fontSize: 24, 'margin-left': 16, 'margin-right': 32  }} onClick={() => setHidden(s => !s)}/>
              <div className='popover__threePoints__block__text'>Скрыть</div></div>
            : null}
          
          <div className='popover__threePoints__block'>
            <DeleteOutlineIcon  color="disabled" sx={{ fontSize: 24, 'margin-left': 16, 'margin-right': 32  }}/>
            <div className='popover__threePoints__block__text'>Удалить</div>
          </div>
        </div>
      </Popover>
        </div>
      </div>
    </div>
    </>
  )
}

UserTest.defaultProps = {image: "defaultPat.png" , TestName: "Без имени", TestTime: "00:00"}
