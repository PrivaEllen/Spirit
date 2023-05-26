import React from "react";
import { useContext, useEffect } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from "../components/set_tests/Header";
import Pattern from "../components/set_tests/Pattern";
import UserTest from "../components/set_tests/UserTest";
import AddTest from "../components/set_tests/AddTest";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { getTypes, getUserTests } from "../services/TestService";
import stc from "../store/SetStore";

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  
function TestSet() {
    const {user, test} = useContext(Context)
    
    useEffect(() => {
        getUserTests(1).then(data => test.setTemplates(data.userTests))
        getUserTests(user._user.id).then(data => {test.setTests(data.userTests); stc.setData(data.userTests); stc.setList(data.userTests)})
        getTypes().then(data => user.setTypes(data.types))
    }, [])

    return (
        <>
        <div className="TestSet">
        <ThemeProvider theme={darkTheme}>
            <Header/>
            <div>
                <div className='PatternSet__head'>
                    <div className='PatternSet__head__body'>
                        <span className='Pattern_text'>Шаблоны</span>
                    </div>
                </div>
                <div className='Pattern-body' style={{'border-bottom': '1px solid rgba(255, 255, 255, 0.12)'}}>
                    <div className='Pattern__container'>
                        {test._templates.map(temp => <Pattern key={temp.testId} TestName={temp.name} image={temp.img} templateId={temp.testId}/>)}
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
                        {console.log(stc._data)}
                        {stc._data.map(t => <UserTest key={t.testId} TestName={t.name} TestTime={t.dateOfCreate} image={t.img} testId={t.testId}/>)}
                    </div>
                </div>
            </div>
            </ThemeProvider>   
        </div>
        </>
    )
}

export default observer(TestSet)
