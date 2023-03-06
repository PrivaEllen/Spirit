import logo from './images/Logo.png';
import { LOGIN, TESTS } from '../../router/utils';
import React, { useContext } from "react";
import { Context } from '../..';
import { observer } from "mobx-react-lite";



function Header()
{
    const {user} = useContext(Context)
    console.log(user)
    return(
       <div id = "header">
            <div id="logo">
            <img src = {logo} />
                <span >SPIRIT</span>
            </div>
            <div id = "info">
                <a href="#buy">ГЛАВНАЯ</a>
                <a href="#buy2">КУПИТЬ</a>
                <a href ="#team">О КОМАНДЕ</a>
                <a id = "start"  onClick={() => window.location.assign(user._isAuth ? TESTS : LOGIN)}>НАЧАТЬ</a>
            </div>
    </div>
    )
}

export default Header