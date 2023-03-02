import React from 'react';
import { LOGIN } from '../../router/utils';
import logo from './images/Logo.png';

class Lheader extends React.Component
{
    render()
    {
        return (<div id = "header">
        <div id="logo">
        <img src = {logo} />
            <span >SPIRIT</span>
        </div>
        <div id = "info">
            <a href="#buy">ГЛАВНАЯ</a>
            <a href="#buy2">КУПИТЬ</a>
            <a href ="#team">О КОМАНДЕ</a>
            <a id = "start" onClick={() => window.location.assign(LOGIN)}>НАЧАТЬ</a>
        </div>
    </div>)
    }
}

export default Lheader