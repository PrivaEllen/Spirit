import React, {useState} from "react"
import Header from "../components/tests/Header"
import TestEdit from "../components/tests/TestEdit"
import Modal from "../components/Modal/Modal"
import TestTools from "../store/TestTools";
import sq from "../store/SectionsQuestions";

export default function TestCreate(props) {
    const [modalActive, setModalActive] = useState()
    var sections = useState([...sq.sections])
    return (
        <div>
            <style>{ 'body {background-color: #121212}' }</style>
            <Header setModalActive={setModalActive} addQuestion={addQuestion} />
            <TestEdit sections={sections}/>
            <Modal active={modalActive} setActive={setModalActive}>{TestTools.innerContent}</Modal>
        </div>
    )
}

function addQuestion(){
    console.log(1);
}