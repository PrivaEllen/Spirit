import React from 'react';
import { observer } from "mobx-react-lite";
import { useParams } from 'react-router-dom';
import Sertificat from '../../pdf/Sertifikat.pdf'

function ModalWindow() {
    const param = useParams()
    const name = param.title

    return(
    <div id = "ModalW">
        <div id="Modal_title"><span>{name}</span></div>
        <div id ="Modal_descr"> <span>Ваш ответ отправлен.</span>
        </div>
        <div id = "Modal_inf">
            <span>На платформе Spirit</span> 
            <a
                href={Sertificat}
                download
            >
            Скачать PDF
            </a>
         </div>
    </div>
    )
}

export default observer(ModalWindow)