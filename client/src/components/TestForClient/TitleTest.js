import React from 'react';
import { observer } from "mobx-react-lite";


function Title() {
    
        return(
        <>
     
        <div className='qustion_block'>
            <div><span className='qust_header_text'>Первое знакомство</span></div>
            <div><span className='qust_body_text'>Расскажите подробнее о вас</span></div>
        </div>
        </>
        )
          
      

}

export default observer(Title)