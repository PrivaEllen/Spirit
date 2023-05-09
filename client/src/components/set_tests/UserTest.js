import React, { useEffect } from 'react'
import { GET_TEST, TEST_SET } from '../../router/utils'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Popover } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BarChartIcon from '@mui/icons-material/BarChart';
import SyncIcon from '@mui/icons-material/Sync';
import {useState, useContext} from 'react'; 
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import RenameMenu from './RenameModal';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { changePhoto, deleteTest } from '../../services/TestService';
import CollectionsIcon from '@mui/icons-material/Collections';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 176,
  padding: 0,
  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.16) 100%), #121212',
  border: '1 solid rgba(255, 255, 255, 0.12)',
  'box-shadow': '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
  'border-radius': 4,
  boxShadow: 24,
};

function UserTest(props) {
  const {test} = useContext(Context)

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const hiddenFileInput = React.useRef(null);
  const handle_Click = event => {
      hiddenFileInput.current.click();
  };

  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(`${props.image}`)
  function handle_Change(e) {
      setFile(e.target.files[0]);
      setFileURL(URL.createObjectURL(e.target.files[0]))
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [hidden, setHidden] = useState(true);

  const [_open, _setOpen] = React.useState(false);
  const handle_Open = () => _setOpen(true);
  const handle_Close = () => _setOpen(false);

  useEffect(() => {
    if (fileURL != `${props.image}`){
      const formData = new FormData()
      formData.set('testId', props.testId)
      formData.set('img', file)
      changePhoto(formData).then(data => {test.setImg(data.data); console.log(data.data)})
    }
  }, [])

  return (
    <>
      <div className='pattern-block'>
      {console.log(test._img)}
      <img src={fileURL} onClick={() => window.location.assign(GET_TEST + '/' + props.testId)} alt="The first" className='pattern__photo'></img>
      <div className='pattern-box'><span className='pattern-box__text'>{props.TestName}</span></div>
      <div className='pattern-box'>
      <svg width='24' height='24' viewBox='0 0 22 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M15 6C16.66 6 17.99 4.66 17.99 3C17.99 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 4.66 13.34 6 15 6ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM7 8C4.67 8 0 9.17 0 11.5V14H14V11.5C14 9.17 9.33 8 7 8ZM15 8C14.71 8 14.38 8.02 14.03 8.05C15.19 8.89 16 10.02 16 11.5V14H22V11.5C22 9.17 17.33 8 15 8Z' fill='white' fill-opacity='0.56'/>
        </svg>
        <div className='pattern-box__info'>
          
          <span className='pattern-box__time' style={{userSelect: 'none'}}>{props.TestTime}</span>
          <MoreVertIcon sx={{cursor: 'pointer'}} onClick={handleClick} color="disabled" />
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
          <Modal
              open={_open}
              onClose={handle_Close}
          >
            <Box sx={style}>
              <RenameMenu style={{border: '1px red solid'}} testId={props.testId} name_test={props.TestName}/>
            </Box>
          </Modal>
          
          <div className='popover__threePoints__block'>
            <SyncIcon color="disabled" sx={{ fontSize: 24, 'margin-left': 16, 'margin-right': 32  }}/>
            <div style={{userSelect: 'none', cursor: 'pointer'}} className='popover__threePoints__block__text' onClick={handle_Open}>Сменить имя</div>
          </div>
          <div className='popover__threePoints__block'>
            <CollectionsIcon color='disabled' sx={{ fontSize: 24, 'margin-left': 16, 'margin-right': 32  }} />
            <div style={{userSelect: 'none', cursor: 'pointer', fontSize: '15.5px'}} className='popover__threePoints__block__text' onClick={handle_Click}>Сменить фото</div>
            <input
              name="img"
              ref={hiddenFileInput}
              onChange={handle_Change}
              style={{display: 'none'}}
              type='file'
            />
          </div>
          
        
            {/* {!hidden ? <div className='popover__threePoints__block'> <VisibilityIcon color="disabled" sx={{ fontSize: 24, 'margin-left': 16, 'margin-right': 32  }} onClick={() => setHidden(s => !s)}/>
              <div className='popover__threePoints__block__text'>Вернуть</div></div>
            : null}
            {hidden ? <div className='popover__threePoints__block'> <VisibilityOffIcon color="disabled" sx={{ fontSize: 24, 'margin-left': 16, 'margin-right': 32  }} onClick={() => setHidden(s => !s)}/>
              <div className='popover__threePoints__block__text'>Скрыть</div></div>
            : null} */}
          
          <div className='popover__threePoints__block'>
            <DeleteOutlineIcon  color="disabled" sx={{ fontSize: 24, 'margin-left': 16, 'margin-right': 32  }}/>
            <div style={{userSelect: 'none', cursor: 'pointer'}} onClick={() => {deleteTest(props.testId); window.location.assign(TEST_SET)}} className='popover__threePoints__block__text'>Удалить</div>
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
export default observer (UserTest)