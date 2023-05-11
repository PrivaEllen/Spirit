import React from "react";
import { observer } from "mobx-react-lite";
import { useState } from 'react';
import Sections from "../tests/Sections";
import { bool } from "yup";
import ins from "../../store/InternStore";

// const ins =
// [

//   {
//     id: 1,
//     title:"Первое знакомство",
//     description:"Расскажите подробнее о вас",
//     questions:
//      [
//       {
//         id:1,
//         type:"oneOfList",
//         title:"are you gay", 
//         isImportant: true, 
//         choise: false,
//         isTrue: false,
//         answers:
//           [
//           {
//             id: 1, 
//             title:"yes",
//             IsRight: true,
//             choiseAns: false
//           },
//           {
//             id: 2, 
//             title:"no",
//             IsRight: false,
//             choiseAns: false
//           },
//           ]
//       },
//       {
//         id:2,
//         type:"text",
//         title:"okey", 
//         isImportant: true, 
//         choise: false,
//         isTrue: false,
//         answers:
//           [
//           {
//             id: 1, 
//             title:"Мы просто играем в жизнь",
//             IsRight: true,
//             choiseAns: false
//           },
         
//           ]
//       },
//       {
//         id:3,
//         type:"severalOfList",
//         title:"are you gay", 
//         isImportant: false, 
//         choise: false,
//         isTrue: false,
//         answers:
//           [
//           {
//             id: 1, 
//             title:"yes",
//             IsRight: true,
//             choiseAns: false
//           },
//           {
//             id: 2, 
//             title:"no",
//             IsRight: false,
//             choiseAns: false
//           },
//           {
//             id: 3, 
//             title:"maybe",
//             IsRight: true,
//             choiseAns: false
//           },
//           ]
//       },
//   ]
//   }
// ]

function check_checkbox(quest, ans)
{
  ans.choiseAns = !ans.choiseAns;
  let isChoise = false;
  let isTr =  true;
  for(let i=0;i<quest.answers.length;++i)
  {
    if(quest.answers[i].choiseAns==true)
      isChoise=true;
    if(quest.answers[i].choiseAns==true&&quest.answers[i].IsRight!=true||quest.answers[i].choiseAns!=true&&quest.answers[i].IsRight==true)
    isTr = false;
  }
  quest.IsRight = isTr;
  quest.choise= isChoise;
  console.log(quest.IsRight);
}


function FormQustions(props){
  const [input, setInput] = useState(props?.value ?? '');
  return(
    <div id = "Qustions">
        <form method="post" id= 'Qustions_form'>
        {ins.sections.map((sect)=>{
          return(
            <div className="section_block" key={sect.id}>
              <div className="section_block_title">
              <div><span className="qust_header_text">Раздел {sect.id}</span></div>
                <div><span className="qust_header_text">{sect.title}</span></div>
                <div><span className="qust_body_text">{sect.description}</span></div> 
              </div>
              {sect.questions.map((quest)=>{
                return(
                <div className="qustion_block" key={quest.id}>
                <label className="qust_header_text">{quest.id}. {quest.title} {quest.isImportant===true? <span className="qust_header_text" style={{'color':'red'}}>*</span>:null}</label>
                {quest.type === 'text'?
                <div className="block_for_textfield"><input type = 'text' className="Text_Field" value = {input} placeholder="Поле для ответа" onChange={e=>{setInput(e.target.value);if(e.target.value!=="")quest.choise=true;else quest.choise=false;  if(e.target.value===quest.answers[0].title)quest.isTrue=true; else quest.isTrue = false;}}/></div>
                :
                <div>
                  {quest.answers.map((ans)=>{ 
                    return(
                      <div key={ans.id}>
                      {(quest.type === 'oneOfList')?<div><input type = 'radio' onChange={() => {quest.choise = true;if(ans.IsRight===true)quest.isTrue= !quest.isTrue;else quest.isTrue=false;}} className="OneToMany" name={quest.id} /><span className="qust_body_text">{ans.title}</span></div>:null}
                      {(quest.type === 'severalOfList')?<div><input type = 'checkbox' onChange={()=>check_checkbox(quest, ans)}  className="ManyToMany"  name={ans.id} /><span className="qust_body_text">{ans.title}</span></div>:null}
                      </div>
                  )})}
                </div>
                }
                </div>
              )})
              }
            </div>
          )})
        }
      </form>
    </div>
  )

}



export default observer(FormQustions);
