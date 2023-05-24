import React from 'react';
import { observer } from "mobx-react-lite";
import ins from "../../store/InternStore";
import { useParams } from 'react-router-dom';

function ModalWindow() {
    const param = useParams()
    const name = param.title

    return(
    <div id = "ModalW">
        {console.log(name)}
        <div id="Modal_title"><span>{name}</span></div>
        <div id ="Modal_descr"> <span>Ваш ответ отправлен.</span>
        </div>
        <div id = "Modal_inf"><span>На платформе Spirit</span> <a>Скачать PDF</a></div>
    </div>
    )
}

export default observer(ModalWindow)