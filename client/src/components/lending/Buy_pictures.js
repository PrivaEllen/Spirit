import React from 'react';
import communicating_pic from './images/communicating_pic.png';
import dia from './images/diagram_pic.png';
import test from './images/test_making_pic.png';


class Buy_pictures extends React.Component
{
    render()
    {return( <div id="info2">
    <div><span>Создай тест</span><img src={communicating_pic}/></div>
    <div><span>Отправь ссылку</span><img src={dia}/></div>
    <div><span>Получи статистику</span><img src={test}/></div>
</div>)
   
    }

}

export default Buy_pictures