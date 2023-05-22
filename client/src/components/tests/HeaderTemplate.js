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
import { TEST_SET } from "../../router/utils";

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
            <button className="button" id="send" type="button" onClick={() => {props.setModalActive(true); TestTools.showTemplateLink(testId, sq, user._user.id); sq.IncrementFlag()}}>Отправить</button>
            <div className="avatar">
              <Avatar src={`http://localhost:5000/${user._user.Photo}`} sx={{ bgcolor: "#90CAF9" }}>N</Avatar>
            </div>
          </div> 
      </div> 
    </header>
  )  
})

export default HeaderTemplate