import React from 'react';
import { observer } from "mobx-react-lite";
import ins from "../../store/InternStore";
import { createInternsAnswers } from '../../services/TestService';
import { useParams } from 'react-router-dom';

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
                if (ins.sections[i].questions[j].choise===false)
                    flag = false;

            }
        }
        let s = document.getElementById('Warning');
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