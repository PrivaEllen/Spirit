import React, { useContext } from "react";
import SearchForm from "./SearchForm";
import Avatar from '@mui/material/Avatar';
import { observer } from "mobx-react-lite";
import { Context } from "../..";

function Header(){
  const {user} = useContext(Context);
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
          <Avatar src="../../../../backend/static/60753431-616e-45a3-a203-2269feced218.png" sx={{ bgcolor: "#90CAF9", width: "49px", height: "49px" }}></Avatar>
        </div>
      </div>
    </header>
  )
}

export default observer(Header);