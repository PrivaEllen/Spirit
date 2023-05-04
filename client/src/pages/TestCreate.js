import React, {useContext, useEffect, useState} from "react"
import Header from "../components/tests/Header"
import TestEdit from "../components/tests/TestEdit"
import Modal from "../components/Modal/Modal"
import TestTools from "../store/TestTools";
import { useParams } from "react-router-dom";
import { getTest } from "../services/TestService";
import sq from "../store/SectionsQuestions";
import { Context } from "..";
import { observer } from "mobx-react-lite";

function TestCreate(props) {
    const param = useParams()
    const testId = param.testId

    useEffect(() => {
        console.log(sq._flag)
        if (testId && sq._flag == 1){
            getTest(testId).then(data => {
                let sections = data.userTest.Sections
                for (let i = 0; i < sections.length; i++){
                    let sq_section = sq.sections[i];
                    sq_section.title = sections[i].name
                    sq_section.description = sections[i].description

                    let questions = sections[i].Questions
                    for (let j = 0; j < questions.length; j++){
                        let sq_question = sq_section.questions[j]
                        sq_question.title = questions[j].questionText
                        sq_question.type = questions[j].type
                        sq_question.isImportant = questions[j].obligatory
                        
                        let answers = questions[j].Answers
                        for (let k = 0; k < answers.length; k++){
                            sq.addAnswer(i, j)
                            let sq_answer = sq_question.answers[k]

                            sq_answer.title = answers[k].text
                            sq_answer.isImportant = answers[k].correctness

                        }

                        if (j < questions.length - 1){
                            sq.addQuestion()
                        }
                    }

                    if (i < sections.length - 1){
                        sq.addSection()
                    }
                }
            })
        }
    })
    
    const [modalActive, setModalActive] = useState()
    // цвет фона
    const [bgColor, setBgColor] = useState("round_dark")
    const color = {
        "round_dark": "#121212",
        "round_green": "#1f2621",
        "round_purple": "#29152a",
        "round_blue": "#162831",
        "round_red": "#311f21",
    }
    // Разделы и вопросы
    // const [sections, setSections] = useState([...sq.sections])

    // Название теста
    const [testTitle, setTestTitle] = useState("Название теста")
    return (
        <div>
            <style>{ `body {background-color: ${color[bgColor]}}` }</style>
            <Header 
                setModalActive={setModalActive}
                bgColor={bgColor} 
                setBgColor={setBgColor}
                testTitle={testTitle}
                setTestTitle={setTestTitle}
            />
            <TestEdit
                testTitle={testTitle}
                setTestTitle={setTestTitle}
            />
            <Modal active={modalActive} setActive={setModalActive}>{TestTools.innerContent}</Modal>
        </div>
    )
}

export default observer(TestCreate)