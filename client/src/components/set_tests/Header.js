import React from "react";
import SearchForm from "./SearchForm";
import Avatar from '@mui/material/Avatar';

export default function Header(){
    return(
        <header className="SetPageHeader">
        <div className="header__logo">
          <img src={require('../../images/logo.png') } alt="Our logo" className='header__logo__photo'></img>
          <span className='header__logo__text'>spirit</span>
        </div>
        <SearchForm/>
        <div className="header__account">
            <span className="header__account__name">Гаврилова Мария</span>
            <div className="avatar">
                <Avatar sx={{ bgcolor: "#90CAF9", width: "49px", height: "49px" }}></Avatar>
            </div>
        </div>
      </header>
    )
}