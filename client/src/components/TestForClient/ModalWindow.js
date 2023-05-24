import React from 'react';
import { observer } from "mobx-react-lite";
import ins from "../../store/InternStore";



function ModalWindow() {
    return(
    <div id = "ModalW">
        <div id="Modal_title"><span>{ins.sections[0].title}</span></div>
        <div id ="Modal_descr"> <span>Ваш ответ отправлен.</span>
        <span>На предоставленную почту высланы результаты.</span></div>
        <div id = "Modal_inf"><span>На платформе Spirit</span> <a>Скачать PDF</a></div>
    </div>
    )
}

export default observer(ModalWindow)