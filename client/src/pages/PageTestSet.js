import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "../components/set_tests/Header";
import Pattern from "../components/set_tests/Pattern";
import UserTest from "../components/set_tests/UserTest";
import AddTest from "../components/set_tests/AddTest";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { getTypes, getUserTests } from "../services/TestService";

function TestSet() {
    const {user, test} = useContext(Context)
    
    useEffect(() => {
        getUserTests(1).then(data => test.setTemplates(data.userTests))
        getUserTests(user._user.id).then(data => test.setTests(data.userTests))
        getTypes().then(data => user.setTypes(data.types))
    }, [])
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
                        {test._templates.map(temp => <Pattern key={temp.testId} TestName={temp.name} image={temp.img}/>)}
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
                        {test._tests.map(t => <UserTest key={t.id} TestName={t.name} TestTime={t.dateOfCreate} image={t.img}/>)}
                    </div>
                </div>
            </div>   
        </div>
        </>
    )
}

export default observer(TestSet)
