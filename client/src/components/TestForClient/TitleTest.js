import React from 'react';
import { observer } from "mobx-react-lite";
import ins from '../../store/InternStore';


function Title() {
    
        return(
        <>
     
        <div className='qustion_block'>
            <div><span className='qust_header_text'>{ins.sections[0].title}</span></div>
            <div><span className='qust_body_text'>{ins.sections[0].title}</span></div>
        </div>
        </>
        )
          
      

}

export default observer(Title)