import React from 'react';
import { observer } from "mobx-react-lite";
import Title from '../components/TestForClient/TitleTest';
import FormQustions from '../components/TestForClient/FormQustions';
import EndButton from '../components/TestForClient/EndButton';

function TestClient() {
        return(
        <>
       < div id  = "_body">
            <Title/>
            <FormQustions/>
            <EndButton/>
       </div>
        </>
        )
}

export default observer(TestClient)