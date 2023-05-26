import React, { useContext } from "react";
import logo from "../../images/logo.png"
import SmallIcon from "../tests/SmallIcon"
import {Divider, Avatar, Popover, Tooltip} from '@mui/material';
import { observer } from "mobx-react-lite";
import TestTools from "../../store/TestTools";
import backgroundButtons from "../../scripts/change_background";
import sq from "../../store/SectionsQuestions";
import {
  Select, 
  MenuItem, 
  Switch, 
  IconButton,
  RadioGroup,
  FormGroup
} from '@mui/material';
import { Context } from "../..";
import { TEST_SET } from "../../router/utils";

const Header = observer((props) => {
  const {user} = useContext(Context)

  return (
    <header id="testPageHeader" className="header">
      <div className="header__container"> 
          <div className="header__side">
            <div className="logo">
              <Tooltip title="Главный экран Spirit">
                <div onClick={() => {window.location.assign(TEST_SET)}}>
                  <img src={logo} alt="logo"/>
                </div>
              </Tooltip>
            </div>
            <div className="header__test-title">
              <h1>{sq.sections[0].title}</h1>
            </div>
          </div>
          <div className="header__side">
            <div className="avatar">
              <Avatar src={`http://localhost:5000/${user._user.Photo}`} sx={{ bgcolor: "#90CAF9" }} />
            </div>
          </div> 
      </div> 
    </header>
  )  
})

export default Header