import React from 'react';
import { observer } from "mobx-react-lite";
import ins from "../../store/InternStore";
import { createInternsAnswers } from '../../services/TestService';
import { useParams } from 'react-router-dom';
import warn from './Warning.png';
import { READY_TEST } from "../../router/utils";


function EndButton() {
    const param = useParams();
    const internId = param.internId;

    function check_button(e)
    {
        
        let flag = true;
        for (let i=0;i<ins.sections.length;++i)
        {
            for(let j = 0;j<ins.sections[i].questions.length;++j)
            {
                if (ins.sections[i].questions[j].choise===false &&  ins.sections[i].questions[j].isImportant===true)
                    flag = false;

            }
        }
        let s = document.getElementById('Warning_name');
        let v = document.getElementById('Warning_img');
        let w = document.getElementById('Warning');
        if (flag === true)
        {
            s.innerHTML='';
            let internAnswers = [];
            let arr = ins.sections;
            for (let i = 0; i < arr.length; i++){
                let arr_questions = arr[i].questions;
                for (let j = 0; j < arr_questions.length; j++){
                    let arr_answers = arr_questions[j].answers
                    for (let k = 0; k < arr_answers.length; k++){
                        console.log(arr_answers[k].choiseAns)
                        if (arr_answers[k].choiseAns === true){
                            internAnswers.push({
                                text: arr_answers[k].title,
                                QuestionId: arr_questions[j].questionId,
                                idAnswer: arr_answers[k].answerId,
                                idIntern: internId,
                            })
                        }
                    }
                }
            }
            console.log(internAnswers)
            createInternsAnswers({
                internAnswers: internAnswers.map(inAns => {
                    return{
                        text: inAns.text,
                        QuestionId: inAns.QuestionId,
                        idAnswer: inAns.idAnswer,
                        idIntern: inAns.idIntern
                    }
                })
            })
            window.location.assign(READY_TEST);
        }
        else
        {
        s.innerHTML = 'Для завершения теста необходимо ответить на все обязательные вопросы';
        v.src = {warn};
        w.style.width = '650px';
        }
    }
    return(
    <div id='for_button'>
        <div id='block_button'> 
            <button id='end_button'  onClick={(e)=>check_button(e)} >Отправить</button>
            <div id="Warning"><img id="Warning_img"></img><span id="Warning_name"></span></div>
        </div>
    </div>
    )
}

export default observer(EndButton)