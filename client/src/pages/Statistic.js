import React, {useContext, useEffect, useState} from "react"
import Header from "../components/Stats/Header"
import Body from "../components/Stats/Body"
import { observer } from "mobx-react-lite"
import { useParams } from "react-router-dom"
import { getInternsAnswers } from "../services/TestService"
import qa from "../store/Answers"
import { Context } from ".."

function Statistic(){
    const param = useParams()
    const testId = param.testId

    const {user} = useContext(Context)

    useEffect(() => {
        if (user._isAuth){
            getInternsAnswers(testId).then(data => {
                console.log(data)
                let array = data.answers 
                for (let i = 0; i < array.length; i++){
                    let qa_questions = qa.questions[i]
                    qa_questions.title = array[i][0].QuestionText
                    qa_questions.type = array[i][0].QuestionType
                    let qa_questions_answers = qa.questions[i].answers
                    for (let j = 0; j < array[i].length; j++){
                        qa.addAnswer(i)
                        qa_questions_answers[j].text = array[i][j].text
                    }
                    if (i < array.length - 1){
                        qa.addQuestion();
                    }
                }
            })
        }
        
    })

    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}

export default observer(Statistic)