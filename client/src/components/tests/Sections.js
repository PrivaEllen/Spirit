import React from "react";
import TextOnLine from "./TextOnLine"
import sq from "../../store/SectionsQuestions";
import {Select, MenuItem, Switch, IconButton} from '@mui/material';
import { observer } from "mobx-react-lite";
import SmallIcon from "./SmallIcon";

const Sections = observer((props) => {
    return (
      <div>
          {sq.sections.map((s, index) => {
            return(
              <div className="section-block" key={s.id}>
                <div className="test-block section">
                    <div className="section__header">
                      <h2>Раздел {index+1} из {sq.sections.length}</h2>
                      {(index === 0)? 
                      null
                      :
                      <SmallIcon onClick={() => sq.removeSection(s.id)} title="Удалить Секцию" svg={
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 31C18 32.1 18.9 33 20 33H28C29.1 33 30 32.1 30 31V19H18V31ZM31 16H27.5L26.5 15H21.5L20.5 16H17V18H31V16Z"/>
                        </svg>
                      }/>}
                    </div>
                    <TextOnLine onChange={props.setTitle} text={(index === 0)? props.title : s.title} placeholder={"Название раздела"}/>
                    <TextOnLine text={s.description} placeholder={"Описание (необязательно)"}/> 
                </div>
                {s.questions.map((q, index) => {
                  return (
                    <div className="test-block question" key={q.id}>
                      <div className="question__header">
                        <div className="question__select">
                          <Select
                            defaultValue={10}
                            displayEmpty
                            variant="outlined"
                            onChange={() => {console.log(0)}}
                            sx={{
                              width: "250px",
                              color: "#fff"
                            }}
                          >
                            <MenuItem value={10}>
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C12.76 15 15 12.76 15 10C15 7.24 12.76 5 10 5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z" fill="#ffffff56"/>
                              </svg>
                              <span>Один из списка</span>
                            </MenuItem>
                            <MenuItem value={20}>
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z" fill="#ffffff56"/>
                              </svg>
                              <span>Несколько из списка</span>
                            </MenuItem>
                            <MenuItem value={30}>
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 12H0V14H12V12ZM12 4H0V6H12V4ZM0 10H18V8H0V10ZM0 18H18V16H0V18ZM0 0V2H18V0H0Z" fill="#ffffff56"/>
                              </svg>
                              <span>Текст</span>
                            </MenuItem>
                          </Select>
                          </div>
                          <div className="question__buttons">
                          <Switch />
                          <span>Обязательный вопрос</span>
                          <SmallIcon title="Добавить фото" svg={
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.5 10.5L8 13.51L11.5 9L16 15H2L5.5 10.5Z"/>
                              </svg>                          
                          }/>
                          <SmallIcon onClick={() => sq.removeQuestion(s.id, q.id)} title="Удалить вопрос" svg={
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 31C18 32.1 18.9 33 20 33H28C29.1 33 30 32.1 30 31V19H18V31ZM31 16H27.5L26.5 15H21.5L20.5 16H17V18H31V16Z"/>
                            </svg>
                          }/>
                          {(index === 0)?
                            <div className="small-icon small-icon_disabled">
                                <IconButton disabled={true} aria-label="delete" color="inherit">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 8L1.41 9.41L7 3.83V16H9V3.83L14.58 9.42L16 8L8 0L0 8Z"/>
                                </svg>
                                </IconButton>
                            </div> 
                            :
                            <SmallIcon onClick={() => sq.moveQuestionTop(s.id, index)} title="Выше" svg={
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 8L1.41 9.41L7 3.83V16H9V3.83L14.58 9.42L16 8L8 0L0 8Z"/>
                              </svg>                                                    
                            }/>
                          }
                          {(index === s.questions.length-1)?
                            <div className="small-icon small-icon_disabled">
                                <IconButton disabled={true} aria-label="delete" color="inherit">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8L14.59 6.59L9 12.17V0H7V12.17L1.42 6.58L0 8L8 16L16 8Z"/>
                                </svg>
                                </IconButton>
                            </div> 
                            :
                            <SmallIcon onClick={() => sq.moveQuestionDown(s.id, index)} title="Ниже" svg={
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16 8L14.59 6.59L9 12.17V0H7V12.17L1.42 6.58L0 8L8 16L16 8Z"/>
                              </svg>                                                                            
                            }/>
                          }
                        </div>
                      </div>
                      <div className="question__content">
                          <div className="question__title">
                            <span>{index+1}.</span>
                            <TextOnLine text={q.title}/>
                          </div>
                          <div className="question_var">
                          </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          )
          }
      </div>
    )
})

export default Sections