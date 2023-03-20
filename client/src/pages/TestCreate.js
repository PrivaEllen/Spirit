import React, {useState} from "react"
import Header from "../components/tests/Header"
import TestEdit from "../components/tests/TestEdit"
import Modal from "../components/Modal/Modal"
import TestTools from "../store/TestTools";
import sq from "../store/SectionsQuestions";

export default function TestCreate(props) {
    // модальное окно
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
    var sections = useState([...sq.sections])
    // Название теста
    const [testTitle, setTestTitle] = useState("Название теста")
    return (
        <div>
            <style>{ `body {background-color: ${color[bgColor]}}` }</style>
            <Header 
                setModalActive={setModalActive}
                addQuestion={addQuestion} 
                bgColor={bgColor} 
                setBgColor={setBgColor}
                testTitle={testTitle}
                setTestTitle={setTestTitle}
            />
            <TestEdit
                sections={sections}
                testTitle={testTitle}
                setTestTitle={setTestTitle}
            />
            <Modal active={modalActive} setActive={setModalActive}>{TestTools.innerContent}</Modal>
        </div>
    )
}

function addQuestion(){
    console.log(1);
}