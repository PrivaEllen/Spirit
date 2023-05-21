import React from 'react';
import { observer } from "mobx-react-lite";



function EndButton() {
        return(
        <div id = 'block_button'>
            <button id= 'end_button' >Отправить</button>
        </div>
        )
}

export default observer(EndButton)