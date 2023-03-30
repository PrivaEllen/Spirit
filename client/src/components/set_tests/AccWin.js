import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 565,
  height: 438,
  border: '1 solid rgba(255, 255, 255, 0.12)',
  bgcolor: '#808080',
  boxShadow: 24,
  p: 4,
};

export default function AccWin() {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="popover-account">
                  <div className="name__container" style={{"border-bottom":"1px solid rgba(255, 255, 255, 0.12)"}}>
                    <div className="name__container__text">
                      <span className="name__container__text__FI">Гаврилова Мария</span>
                      <span className="name__container__text__mail">mag2003tag@gmail.com</span>
                    </div>
                  </div>
                  <div className="ppp__container" style={{"border-bottom":"1px solid rgba(255, 255, 255, 0.12)"}}>
                  <div className="ppp__container__text">
                      <svg style={{margin: "0 16px 0 16px"}} width='20' height='20' viewBox='0 0 22 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M15 6C16.66 6 17.99 4.66 17.99 3C17.99 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 4.66 13.34 6 15 6ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM7 8C4.67 8 0 9.17 0 11.5V14H14V11.5C14 9.17 9.33 8 7 8ZM15 8C14.71 8 14.38 8.02 14.03 8.05C15.19 8.89 16 10.02 16 11.5V14H22V11.5C22 9.17 17.33 8 15 8Z' fill='white' fill-opacity='0.56'/>
                      </svg>
                      <button className="ppp-text">Пользователи</button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style}>g</Box>
                        </Modal>
                      
                    </div>
                    <div className="ppp__container__text">
                    <svg style={{margin: "0 16px 0 16px"}} width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path  d='M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z' fill='white' fill-opacity='0.56'/>
                      </svg>
                      <button className="ppp-text" onClick={handleOpen}>Профиль</button>
                    </div>
                    <div className="ppp__container__text">
                    <svg style={{margin: "0 16px 0 16px"}} width='20' height='16' viewBox='0 0 20 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M18 0H2C0.89 0 0.00999999 0.89 0.00999999 2L0 14C0 15.11 0.89 16 2 16H18C19.11 16 20 15.11 20 14V2C20 0.89 19.11 0 18 0ZM18 14H2V8H18V14ZM18 4H2V2H18V4Z' fill='white' fill-opacity='0.56'/>
                      </svg>
                      <button className="ppp-text" >Персональность</button>
                    </div>
                  </div>
                  <div className="exit__container">
                  <div className="exit__container__text">
                  <span className="exit-text">ВЫЙТИ</span>
                  </div>
                  </div>
                </div>
    </div>
  )
}
