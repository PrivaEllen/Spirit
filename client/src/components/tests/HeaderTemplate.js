import React, { useContext, useState } from "react";
import logo from "../../images/logo.png"
import SmallIcon from "./SmallIcon"
import {Divider, Avatar, Popover, Tooltip} from '@mui/material';
import { observer } from "mobx-react-lite";
import TestTools from "../../store/TestTools";
import backgroundButtons from "../../scripts/change_background";
import sq from "../../store/SectionsQuestions";
import { Context } from "../..";
import { useParams } from "react-router-dom";
import { STATS, TEST_SET } from "../../router/utils";

const HeaderTemplate = observer((props) => {
  const {user} = useContext(Context)

  const param  = useParams()
  const testId = param.testId

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    let rounds = document.getElementsByClassName("round");
    for (const e of rounds){
      if (e.classList.contains("round_active"))
        var color = e.id; 
    }
    props.setBgColor(color);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  return (
    <header id="testPageHeader" className="header">
      <div className="header__container"> 
          <div className="header__side">
            <div className="logo">
              <Tooltip title="Главный экран Spirit">
                <div onClick={() => {sq.IncrementFlag(); window.location.assign(TEST_SET)}}>
                  <img src={logo} alt="logo"/>
                </div>
              </Tooltip>
            </div>
            <div className="header__test-title">
              <h1>{sq.sections[0].title}</h1>
            </div>
          </div>
          <div className="header__side">
            <SmallIcon onClick={() => {window.location.assign(STATS + '/' + testId)}} title="Статистика" svg={
                  <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C0.9 2 0 2.9 0 4V20C0 21.1 0.9 22 2 22H16C17.1 22 18 21.1 18 20V4C18 2.9 17.1 2 16 2ZM9 2C9.55 2 10 2.45 10 3C10 3.55 9.55 4 9 4C8.45 4 8 3.55 8 3C8 2.45 8.45 2 9 2ZM16 20H2V4H4V7H14V4H16V20Z" fill="white"/>
                  </svg>
            }/>
            <button className="button" id="send" type="button" onClick={() => {props.setModalActive(true); TestTools.showTemplateLink(testId, user._user.id); sq.IncrementFlag()}}>Отправить</button>
            <div className="avatar">
              <Avatar src={`http://localhost:5000/${user._user.Photo}`} sx={{ bgcolor: "#90CAF9" }}>N</Avatar>
            </div>
          </div> 
      </div> 
    </header>
  )  
})

export default HeaderTemplate