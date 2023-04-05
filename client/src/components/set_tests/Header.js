import React, { useContext } from "react";
import SearchForm from "./SearchForm";
import Avatar from '@mui/material/Avatar';
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import Popover from '@mui/material/Popover';
import AccWin from "./AccWin";


function Header(){
  const {user} = useContext(Context);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    return(
        <header className="SetPageHeader">
        <div className="header__logo">
          <img src={require('../../images/logo.png') } alt="Our logo" className='header__logo__photo'></img>
          <span className='header__logo__text'>spirit</span>
        </div>
        <SearchForm/>
        <div className="header__account">
            <span className="header__account__name">{user._user.Surname} {user._user.Name}</span>
            <div className="avatar">
                <Avatar  onClick={handleClick} sx={{  width: "49px", height: "49px" }} src={`http://localhost:5000/${user._user.Photo}`}/>
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
                sx={{ "& .MuiPopover-paper": {background: "none"} }}
                >
                <AccWin/>
              </Popover>
            </div>
        </div>
      </header>
    )
}

export default observer(Header);