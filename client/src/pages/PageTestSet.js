import React from "react";
import Header from "../components/set_tests/Header";
import Pattern from "../components/set_tests/Pattern";
import UserTest from "../components/set_tests/UserTest";
import AddTest from "../components/set_tests/AddTest";
import { observer } from "mobx-react-lite";

function TestSet() {
    return (
        <>
        <div className="TestSet">
            <Header/>
            <div>
                <div className='PatternSet__head'>
                    <div className='PatternSet__head__body'>
                        <span className='Pattern_text'>Шаблоны</span>
                    </div>
                </div>
                <div className='Pattern-body' style={{'border-bottom': '1px solid rgba(255, 255, 255, 0.12)'}}>
                    <div className='Pattern__container'>
                        <Pattern TestName = "Сбор информации" image = "pat3"/>
                        <Pattern TestName = "Тип личности" image = "pat2"/>
                        <Pattern TestName = "Куб в пустыне" />
                        <Pattern />
                        <Pattern TestName = "Сбор информации" image = "pat3"/>
                        <Pattern TestName = "Тип личности" image = "pat2"/>
                        <Pattern TestName = "Куб в пустыне" />
                        <Pattern />
                    </div>
                </div>
            </div>
            <div className='PatternSet__head'>
                    <div className='PatternSet__head__body'>
                        <span className='Pattern_text'>Ваши тесты</span>
                    </div>
            </div>
            <div className="PatternSet">
                <div className='Pattern-body'>
                    <div className='Pattern__container'>
                        <AddTest/>
                        <UserTest TestName = "Тест на IQ" TestTime = "23 фев. 2023г" image = 'pat1' privacy = "privat"/>
                        <UserTest/>
                    </div>
                </div>
            </div>   
        </div>
        </>
    )
}

export default observer(TestSet)
