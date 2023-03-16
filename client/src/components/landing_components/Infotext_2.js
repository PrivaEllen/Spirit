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
       <div class ="text_slider">
        <div><span className ="Header_buy2">АДАПТИРУЕМ ПОД ВАС</span></div>
        <div> <Carousel/></div>
       </div>
        <div>
            <span className ="Text_buy2">Мы предлагаем подстроить наш продукт под потребности вашей команды.</span> <br/>
            <a className ="Header_buy2">ВЕСЬ ТОТ ЖЕ ФУНКЦИОНАЛ, И ДАЖЕ БОЛЬШЕ!</a><br/>
          <span className ="Text_buy2"> Мы разработаем специально для вас:
            <ul>
                <li>Индивидуальный дизайн</li>
                <li>Возможность синхронизации тестов между всеми HR-менеджерами</li>
                <li>Синхронизация полученных результатов</li>
                <li>Дополнительный функционал под ваши нужды</li>
            </ul>
                
 

            </span>
            
        </div>
    </div>
    
    
    
  <div id="team"> <span  className ="Header_buy2">КОМАНДА</span> </div>    
    <div id = "us">

    <div className='card'><div className='right_photo'><img className='profile_photo' src={Privalova}/></div><div> <span className ="Text_buy2">Привалова <br/>Елена Максимовна<br/><br/>тимлид,<br/>frontend-разработчик</span></div></div>
    <div className='card'><div className='right_photo'><img className='profile_photo' src={Gavrilova}/> </div><div><span className ="Text_buy2">Гаврилова <br/> Мария Андреевна <br/><br/> backend-разработчик</span></div></div>
    <div className='card'><div className='right_photo'><img className='profile_photo' src={Kolesnikov}/></div><div> <span className ="Text_buy2">Колесников <br/> Игнат Евгеньевич <br/><br/> дизайнер</span></div></div>
    <div className='card'><div className='right_photo'><img className='profile_photo' src={Buchnev}/> </div><div><span className ="Text_buy2">Бучнев <br/> Максим Тимофеевич<br/><br/> backend-разработчик</span></div></div>
    <div className='card'><div className='left_photo'><img className='profile_photo' src={Alexina}/> </div><div><span className ="Text_buy2">Алёхина <br/> Анна Евгеньевна <br/><br/> дизайнер</span></div></div>
    <div className='card'><div className='left_photo'><img className='profile_photo' src={Markova}/> </div><div><span className ="Text_buy2">Маркова <br/> Дана Константиновна<br/><br/> frontend-разработчик</span></div></div>
    <div className='card'><div className='left_photo'><img className='profile_photo' src={Stusova}/> </div><div><span className ="Text_buy2">Стусова <br/> Екатерина Дмитриевна <br/><br/>аналитик</span></div></div>
    <div className='card'><div className='left_photo'><img className='profile_photo' src={Rudenko}/> </div><div><span className ="Text_buy2">Руденко <br/>Владимир Павлович<br/><br/>маркетолог</span></div></div>
</div>
<div id ="connect">
    <div >
    <span className='LargeUs'>8 863 237-03-70</span>
    <span className='SmallUs'>звонок бесплатный для всех регионов РФ</span>
    </div>
    <div>
    <span className='LargeUs'>request@spirit.ru</span>
    <span className='SmallUs'>для вопросов, связанных с брендированием</span>
    </div>
</div>
</div>
)
   
    }

}

export default Infotext_2