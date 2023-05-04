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

const Header = observer((props) => {
  const {user} = useContext(Context)

  const param  = useParams()
  const testId = param.testId

  const hiddenFileInput = React.useRef(null);
  
  const handle_Click = event => {
      hiddenFileInput.current.click();
  };

  const [file, setFile] = useState(`http://localhost:5000/${user._user.Photo}`);
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

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
                <div onClick={() => {props.setModalActive(true); TestTools.showExitMenu(testId, sq, user._user.id); sq.IncrementFlag()}}>
                  <img src={logo} alt="logo"/>
                </div>
              </Tooltip>
            </div>
            <div className="header__delete">
              <SmallIcon onClick={() => {props.setModalActive(true); TestTools.showDeleteMenu(testId); sq.IncrementFlag()}} title="Удалить тест" svg={
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 31C18 32.1 18.9 33 20 33H28C29.1 33 30 32.1 30 31V19H18V31ZM31 16H27.5L26.5 15H21.5L20.5 16H17V18H31V16Z" fill="white"/>
                </svg>
              }/>
            </div>
            <div className="header__test-title">
              <h1>{sq.sections[0].title}</h1>
            </div>
          </div>
          <div className="header__side">
            <SmallIcon onClick={() => {sq.addQuestion()}} title="Создать вопрос" svg={
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white"/>
            </svg>
            }/>
            <SmallIcon onClick={() => sq.addSection()} title="Создать раздел" svg = {<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.801562 23.9218C0.515625 23.8187 0.178125 23.4718 0.0796875 23.1812C0.009375 22.9796 0 22.6796 0 20.6921C0 18.5452 0.0046875 18.414 0.09375 18.1749C0.201562 17.8843 0.45 17.6265 0.75 17.4905C0.960937 17.3968 1.00312 17.3921 12 17.3921H23.0391L23.2781 17.5046C23.4047 17.5655 23.5875 17.7015 23.6859 17.814C24 18.1843 24 18.1796 24 20.6968C24 23.2796 24.0047 23.2515 23.625 23.6265C23.2172 24.039 24.3562 24.0015 11.9812 23.9968C2.1375 23.9968 0.984375 23.9874 0.801562 23.9218Z" fill="white"/>
            <path d="M11.3063 15.5969C10.8375 15.1234 10.7812 15.0531 10.7812 14.9031C10.7812 14.5703 11.0953 14.4015 11.4 14.5703L11.5781 14.664V13.5437V12.4233H11.3438C11.0859 12.4233 10.8563 12.3296 10.8094 12.2124C10.7719 12.1139 10.7719 11.8889 10.8094 11.7905C10.8563 11.6733 11.0859 11.5795 11.3438 11.5795H11.5781V10.4545V9.32476L11.4 9.42789C11.0953 9.60602 10.7812 9.43258 10.7812 9.09507C10.7812 8.94506 10.8328 8.87943 11.3109 8.40129C12.0188 7.69814 11.9859 7.69814 12.6938 8.40598C13.1625 8.87943 13.2188 8.94975 13.2188 9.09975C13.2188 9.43258 12.9047 9.60133 12.6 9.42789L12.4219 9.32476V10.4545V11.5795H12.6563C12.9141 11.5795 13.1438 11.6733 13.1906 11.7905C13.2281 11.8889 13.2281 12.1139 13.1906 12.2124C13.1438 12.3296 12.9141 12.4233 12.6563 12.4233H12.4219V13.5484V14.6781L12.6 14.575C12.9047 14.3968 13.2188 14.5703 13.2188 14.9078C13.2188 15.0578 13.1672 15.1234 12.6891 15.6016C11.9813 16.3047 12.0141 16.3047 11.3063 15.5969Z" fill="white"/>
            <path d="M0.988672 12.3015C0.782422 12.128 0.782422 11.8749 0.988672 11.7015L1.13398 11.5796H2.04336C3.06055 11.5796 3.18711 11.6077 3.27148 11.8608C3.30898 11.9593 3.30898 12.0437 3.27148 12.1421C3.18711 12.3952 3.06055 12.4233 2.04336 12.4233H1.13398L0.988672 12.3015Z" fill="white"/>
            <path d="M4.36871 12.3765C4.31246 12.353 4.23278 12.2593 4.1859 12.1702C4.12028 12.0343 4.12028 11.9874 4.17184 11.8608C4.27965 11.6077 4.39215 11.5796 5.41403 11.5796H6.33746L6.4734 11.7155C6.56715 11.8093 6.60934 11.8983 6.60934 12.0015C6.60934 12.1046 6.56715 12.1937 6.4734 12.2874L6.33746 12.4233L5.40465 12.4187C4.89371 12.4187 4.42965 12.3999 4.36871 12.3765Z" fill="white"/>
            <path d="M7.59375 12.2872C7.49531 12.1935 7.45312 12.1044 7.45312 12.0013C7.45312 11.8981 7.49531 11.8091 7.59375 11.7153L7.73437 11.5747L8.71875 11.5888C9.66562 11.6028 9.70312 11.6075 9.80625 11.7106C9.88125 11.781 9.91406 11.87 9.91406 12.0013C9.91406 12.1325 9.88125 12.2216 9.80625 12.2919C9.70312 12.395 9.66562 12.3997 8.71875 12.4138L7.73437 12.4278L7.59375 12.2872Z" fill="white" />
            <path d="M14.2965 12.3622C14.0528 12.2403 14.0059 11.8747 14.2122 11.6919C14.2965 11.6122 14.409 11.6028 15.2856 11.5888L16.2653 11.5747L16.4059 11.7153C16.5934 11.9028 16.5934 12.0997 16.4106 12.2872L16.2747 12.4231H15.3418C14.6903 12.4231 14.3809 12.4044 14.2965 12.3622Z" fill="white"/>
            <path d="M17.5266 12.2874C17.4328 12.1937 17.3906 12.1046 17.3906 12.0015C17.3906 11.8983 17.4328 11.8093 17.5266 11.7155L17.6625 11.5796H18.5859C19.6031 11.5796 19.7203 11.6077 19.8281 11.8608C19.875 11.9733 19.875 12.0296 19.8281 12.1421C19.7203 12.3952 19.6031 12.4233 18.5859 12.4233H17.6625L17.5266 12.2874Z" fill="white"/>
            <path d="M20.9022 12.353C20.7381 12.264 20.6631 12.0483 20.7287 11.8608C20.8131 11.6077 20.9397 11.5796 21.9569 11.5796H22.8662L23.0116 11.7015C23.2178 11.8749 23.2178 12.128 23.0116 12.3015L22.8662 12.4233H21.9475C21.235 12.4187 20.9959 12.4046 20.9022 12.353Z" fill="white"/>
            <path d="M0.749048 6.51207C0.491235 6.39487 0.25686 6.17924 0.12561 5.93079C0.0224855 5.74797 0.0224854 5.7011 0.00842295 3.40414C-0.00563955 0.722789 -0.0103271 0.755603 0.36936 0.375901C0.78186 -0.0366138 -0.352514 0.000887607 11.999 0.000887607C24.3506 0.000887607 23.2162 -0.0366138 23.624 0.375901C24.0037 0.750915 23.999 0.722789 23.999 3.3057C23.999 5.82298 23.999 5.81829 23.685 6.18862C23.5865 6.30112 23.4037 6.43706 23.2772 6.498L23.0381 6.61051H11.999C0.997486 6.61051 0.959985 6.60582 0.749048 6.51207Z" fill="white" />
            </svg>
            }/>
            <Divider orientation="vertical" flexItem sx={{border: "1px solid #ffffff12"}} />
            <SmallIcon title="Фильтрация тестов" svg = {
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 12H11V10H7V12ZM0 0V2H18V0H0ZM3 7H15V5H3V7Z"/>
              </svg>                  
            }/>
            <SmallIcon onClick={handleClick} title="Измененить фон" svg = {
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.1862 23.9533C14.0829 23.9157 13.914 23.8454 13.8107 23.7891C13.6933 23.7328 11.966 22.0345 9.34672 19.4073C5.26296 15.3212 5.06111 15.11 4.96723 14.852C4.8358 14.4908 4.8358 14.0639 4.96723 13.7073C5.06111 13.4634 5.17846 13.3273 6.0891 12.4031C6.65237 11.8355 7.14524 11.3054 7.18749 11.2209C7.333 10.93 7.26729 10.5547 7.0185 10.3342C6.96218 10.2779 6.19236 9.76658 5.31459 9.19893C2.65779 7.48658 1.4092 6.61399 1.0149 6.20115C-0.45901 4.66707 -0.308803 2.16189 1.34348 0.834232C2.77984 -0.329226 4.7607 -0.268238 6.14542 0.970281C6.56319 1.35028 7.55831 2.77176 9.39835 5.62411C9.85367 6.33251 10.2761 6.96584 10.3325 7.02214C10.5531 7.27078 10.9286 7.33646 11.2196 7.19103C11.3041 7.1488 11.8345 6.65621 12.4025 6.09325C13.3366 5.16905 13.4633 5.06584 13.7168 4.96732C13.9421 4.88288 14.0642 4.8688 14.3505 4.88288C15.0171 4.92041 14.726 4.66707 19.4529 9.38658C24.2877 14.2187 23.9966 13.8856 23.9966 14.6081C23.9919 15.1945 23.884 15.3775 23.0485 16.2313C22.0815 17.2212 21.8515 17.3619 21.2178 17.3666H20.8798V17.6997C20.8798 18.075 20.8 18.3424 20.5982 18.6333C20.5231 18.7412 19.8284 19.4589 19.0586 20.2236C17.9179 21.3589 17.6128 21.6357 17.4016 21.7342C17.2608 21.7999 17.1106 21.8562 17.073 21.8562C17.0308 21.8562 16.9651 21.9547 16.9134 22.1049C16.7914 22.4426 16.5942 22.7054 16.0122 23.2636C15.6789 23.5826 15.4301 23.7797 15.2611 23.8594C14.956 24.0002 14.4585 24.0424 14.1862 23.9533ZM15.3832 21.5935C15.3832 21.5654 15.1813 21.1009 14.9373 20.5567C14.6932 20.0125 14.4913 19.5387 14.4913 19.4965C14.4913 19.4542 14.5289 19.3979 14.5758 19.3745C14.6603 19.3276 15.2987 19.6044 16.3642 20.1392L16.7116 20.3175L17.9977 19.032C18.7018 18.3283 19.2792 17.7325 19.2792 17.7138C19.2792 17.6903 18.4953 16.5034 17.533 15.0725C15.7118 12.3609 15.7024 12.3375 15.9746 12.2952C16.0356 12.2858 17.0308 12.9379 18.6455 14.0357L21.2272 15.795L21.828 15.2039L22.4242 14.6081L19.5514 11.737L16.674 8.86115L12.7686 12.7644L8.85855 16.6723L11.7313 19.5434L14.6087 22.4192L14.9936 22.0345C15.2095 21.8187 15.3832 21.6217 15.3832 21.5935ZM14.9044 7.09251L14.2848 6.47325L13.2991 7.44436C12.2476 8.47646 12.0176 8.64535 11.4637 8.79078C10.9286 8.92683 10.3043 8.85646 9.79734 8.60313C9.31386 8.35918 9.07447 8.05424 7.84465 6.16362C6.05624 3.4051 5.48827 2.58411 5.09867 2.19942C3.9017 1.01719 1.90206 1.67399 1.61573 3.3488C1.55001 3.73349 1.62512 4.2214 1.80818 4.58732C2.09452 5.16905 2.58738 5.53498 6.15951 7.84782C8.05118 9.07695 8.35629 9.31621 8.60038 9.79943C8.85385 10.3061 8.92426 10.93 8.78814 11.4649C8.64262 12.0184 8.47364 12.2483 7.44096 13.2992L6.46931 14.2844L7.08891 14.9036L7.70852 15.5229L11.6139 11.6197L15.524 7.71177L14.9044 7.09251Z" fill="white"/>
              <path d="M3.47056 4.72841C2.87912 4.42817 2.82748 3.51335 3.37668 3.14742C3.64424 2.97384 4.03853 2.95039 4.32956 3.09113C4.93508 3.38199 4.9961 4.30619 4.43752 4.67681C4.17466 4.85039 3.7522 4.87384 3.47056 4.72841Z"/>
              </svg>                  
            }/>
            <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left', 
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            sx={{ "& .MuiPopover-paper": {background: "none"} }}
          >
            <div className="popover">
              <div className="popover__title">
                <span>Фон</span>
              </div>
              <div className="popover__content bacground-select">
                <div onClick={backgroundButtons.setBackgroundDark} className={"round" + ((props.bgColor === "round_dark") ? " round_active" : "")} id="round_dark">
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.46253 8.56773L1.16128 5.26648L0.0371094 6.38273L4.46253 10.8081L13.9625 1.30814L12.8463 0.191895L4.46253 8.56773Z" fill="white" fillOpacity="0.56"/>
                  </svg>
                </div>
                <div onClick={backgroundButtons.setBackgroundGreen} className={"round" + ((props.bgColor === "round_green") ? " round_active" : "")} id="round_green">
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.46253 8.56773L1.16128 5.26648L0.0371094 6.38273L4.46253 10.8081L13.9625 1.30814L12.8463 0.191895L4.46253 8.56773Z" fill="white" fillOpacity="0.56"/>
                  </svg>
                </div>
                <div onClick={backgroundButtons.setBackgroundPurple} className={"round" + ((props.bgColor === "round_purple") ? " round_active" : "")} id="round_purple">
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.46253 8.56773L1.16128 5.26648L0.0371094 6.38273L4.46253 10.8081L13.9625 1.30814L12.8463 0.191895L4.46253 8.56773Z" fill="white" fillOpacity="0.56"/>
                  </svg>
                </div>
                <div onClick={backgroundButtons.setBackgroundBlue} className={"round" + ((props.bgColor === "round_blue") ? " round_active" : "")} id="round_blue">
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.46253 8.56773L1.16128 5.26648L0.0371094 6.38273L4.46253 10.8081L13.9625 1.30814L12.8463 0.191895L4.46253 8.56773Z" fill="white" fillOpacity="0.56"/>
                  </svg>
                </div>
                <div onClick={backgroundButtons.setBackgroundRed} className={"round" + ((props.bgColor === "round_red") ? " round_active" : "")} id="round_red">
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.46253 8.56773L1.16128 5.26648L0.0371094 6.38273L4.46253 10.8081L13.9625 1.30814L12.8463 0.191895L4.46253 8.56773Z" fill="white" fillOpacity="0.56"/>
                  </svg>
                </div>
              </div>
            </div>
          </Popover>
            <SmallIcon onClick={handle_Click} title="Сменить фотографию теста" svg={
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.5 10.5L8 13.51L11.5 9L16 15H2L5.5 10.5Z"/>
              </svg>                          
            }/>
            <input
              name="img"
              ref={hiddenFileInput}
              onChange={handleChange}
              style={{display: 'none'}}
              type='file'
            />
            <SmallIcon title="Статистика" svg = {
              <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C0.9 2 0 2.9 0 4V20C0 21.1 0.9 22 2 22H16C17.1 22 18 21.1 18 20V4C18 2.9 17.1 2 16 2ZM9 2C9.55 2 10 2.45 10 3C10 3.55 9.55 4 9 4C8.45 4 8 3.55 8 3C8 2.45 8.45 2 9 2ZM16 20H2V4H4V7H14V4H16V20Z" fill="white"/>
              </svg>                  
            }/>
            <button className="button" id="send" type="button" onClick={() => {props.setModalActive(true); TestTools.showGenerateLink(testId, sq, user._user.id); sq.IncrementFlag()}}>Отправить</button>
            <div className="avatar">
              <Avatar src={`http://localhost:5000/${user._user.Photo}`} sx={{ bgcolor: "#90CAF9" }}>N</Avatar>
            </div>
          </div> 
      </div> 
    </header>
  )  
})

export default Header