import React from 'react';
import Carousel from './Carousel';
import Privalova from './images/Photo.png'
import Gavrilova from './images/Photo (1).png'
import Kolesnikov from './images/Photo (3).png'
import Buchnev from './images/Photo (4).png'
import Alexina from './images/Photo (5).png'
import Markova from './images/Photo (6).png'
import Stusova from './images/Photo (7).png'
import Rudenko from './images/Photo (8).png'



class Infotext_2 extends React.Component
{
    render()
    {return(
    <div id = "frame">
    <div id="buy2">
       <div class ="d">
        <a>АДАПТИРУЕМ ПОД ВАС</a>
      <Carousel/>
       </div>
        <div>
            <span>Мы предлагаем подстроить наш продукт под потребности вашей команды.</span> <br/>
            <a>ВЕСЬ ТОТ ЖЕ ФУНКЦИОНАЛ, И ДАЖЕ БОЛЬШЕ!</a><br/>
          <span> Мы разработаем специально для вас:
            <ul>
                <li>Индивидуальный дизайн</li>
                <li>Возможность синхронизации тестов между всеми HR-менеджерами</li>
                <li>Синхронизация полученных результатов</li>
                <li>Дополнительный функционал под ваши нужды</li>
            </ul>
                
 

            </span>
            
        </div>
    </div>
    
    
    
    <span id="team">КОМАНДА</span>         
    <div id = "us">
    <div><img src={Privalova}/> <span>Привалова <br/>Елена Максимовна<br/><br/>тимлид,<br/>frontend-разработчик</span></div>
    <div><img src={Gavrilova}/> <span>Гаврилова <br/> Мария Андреевна <br/><br/> backend-разработчик</span></div>
    <div><img src={Kolesnikov}/> <span>Колесников <br/> Игнат Евгеньевич <br/><br/> дизайнер</span></div>
    <div><img src={Buchnev}/> <span>Бучнев <br/> Максим Тимофеевич<br/><br/> backend-разработчик</span></div>
    <div><img src={Alexina}/> <span>Алёхина <br/> Анна Евгеньевна <br/><br/> дизайнер</span></div>
    <div><img src={Markova}/> <span>Маркова <br/> Дана Константиновна<br/><br/> frontend-разработчик</span></div>
    <div><img src={Stusova}/> <span>Стусова <br/> Екатерина Дмитриевна <br/><br/>аналитик</span></div>
    <div><img src={Rudenko}/> <span>Руденко <br/>Владимир Павлович<br/><br/>маркетолог</span></div>
</div>
</div>
)
   
    }

}

export default Infotext_2