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

const Header = observer((props) => {
  const {user} = useContext(Context)

  return (
    <header id="testPageHeader" className="header">
      <div className="header__container"> 
          <div className="header__side">
            <div className="logo">
              <Tooltip title="Главный экран Spirit">
                <div onClick={() => {props.setModalActive(true); TestTools.showExitMenu()}}>
                  <img src={logo} alt="logo"/>
                </div>
              </Tooltip>
            </div>
            <div className="header__test-title">
              <h1>{sq.sections[0].title}</h1>
            </div>
          </div>
          <div className="header__side">
            {/* <Switch/>
            <span className="text">Принимать ответы</span>
            <SmallIcon title="Отправить на почту" svg = {
              <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.99 7C19.99 6.28 19.62 5.65 19.05 5.3L10 0L0.95 5.3C0.38 5.65 0 6.28 0 7V17C0 18.1 0.9 19 2 19H18C19.1 19 20 18.1 20 17L19.99 7ZM10 12L1.74 6.84L10 2L18.26 6.84L10 12Z"/>
              </svg>                            
            }/>
            <SmallIcon title="Редактировать" svg = {
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.998047 14.2515V18.0015H4.74805L15.808 6.94152L12.058 3.19152L0.998047 14.2515ZM18.708 4.04152C19.098 3.65152 19.098 3.02152 18.708 2.63152L16.368 0.291523C15.978 -0.0984766 15.348 -0.0984766 14.958 0.291523L13.128 2.12152L16.878 5.87152L18.708 4.04152Z"/>
              </svg>                               
            }/> */}
            <div className="avatar">
              <Avatar src={`http://localhost:5000/${user._user.Photo}`} sx={{ bgcolor: "#90CAF9" }} />
            </div>
          </div> 
      </div> 
    </header>
  )  
})

export default Header