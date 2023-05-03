import React from "react";
import { observer } from "mobx-react-lite";

const s =
[
  {
    id: 1,
    TypeQst:1,
    title: 'Как ваши дела?',
    answers: 
    [
      {
        id: 1,
        ans: 'Плохо',
      },
      {
        id: 2,
        ans: 'Нормально',
      },
      {
        id: 3,
        ans: 'Супер',
      }
    ]
  },
  {
    id: 2,
    TypeQst:2,
    title:'Ваша любимая еда?',
    answers: 
    [
      {
        id: 1,
        ans: 'Роллы',
      },
      {
        id: 2,
        ans: 'Пицца',
      },
      {
        id: 3,
        ans: 'Пельмени',
      },
      {
        id: 4,
        ans: 'Борщ',
      },
      {
        id: 5,
        ans: 'Сырный суп',
      },
    ]
  },
  {
    id: 3,
    TypeQst:3,
    title:'Напишите ваше мнение о Met Gala 2023',
    
  }
]

function FormQustions(){
  return(
    <div id = "Qustions">
        <form method="post" id= 'Qustions_form'>
       {
        s.map (el =>(
          <div className="qustion_block">
          <label className="qust_header_text">{el.id}. {el.title}</label>
          {(el.TypeQst==3)?
         <div className="block_for_textfield"> <input type = 'text' className="Text_Field" placeholder="Поле для ответа"/></div>
          :
          <div>
            {el.answers.map(elem=>( 
              <div>
               {(el.TypeQst==1)?<div><input type = 'radio' className="OneToMany" name={el.id} /><span className="qust_body_text">{elem.ans}</span></div>:null}
               {(el.TypeQst==2)?<div><input type = 'checkbox'  className="ManyToMany"  name={el.id} /><span className="qust_body_text">{elem.ans}</span></div>:null}
            </div>
            ))}
            </div>}
        </div>
        ))
       }
      </form>
    </div>
  )

}



export default observer(FormQustions)