import React from 'react';
import { observer } from "mobx-react-lite";
import ins from "../../store/InternStore";



function EndButton() {
    function check_button(e)
    {
        let flag = true;
        for (let i=0;i<ins.sections.length;++i)
        {
            for(let j = 0;j<ins.sections[i].questions.length;++j)
            {
                if (ins.sections[i].questions[j].choise===false)
                    flag = false;

            }
        }
        let s = document.getElementById('Warning');
        if (flag === true)
        {
            s.innerHTML='';
            //Здесь должна быть обработка отправления результатов
        }
        else
        {
        s.innerHTML = 'Введены не все обязательные поля!';
        }
    }
    return(
    <div id='for_button'>
        <div id='block_button'> 
            <button id='end_button'  onClick={(e)=>check_button(e)} >Отправить</button>
            <span id="Warning"></span>
        </div>
    </div>
    )
}

export default observer(EndButton)