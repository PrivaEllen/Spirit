import React from 'react';
import communicating_pic from './images/communicating_pic.png';
import dia from './images/diagram_pic.png';
import test from './images/test_making_pic.png';


class Buy_pictures extends React.Component
{
    render()
    {return( <div id="info2">
        <div>
    <div><span className='Buy_pictures_text'>Создай тест</span><img className='Buy_pictures_img' src={communicating_pic}/></div>
    <div><span className='Buy_pictures_text'>Отправь ссылку</span><img className='Buy_pictures_img' src={dia}/></div>
    <div><span className='Buy_pictures_text'>Получи статистику</span><img className='Buy_pictures_img' src={test}/></div>
    </div>
</div>)
   
    }

}

export default Buy_pictures