import React, {useEffect} from "react";
import Chart from "chart.js/auto";
import qa from "../../store/Answers";
import { observer } from "mobx-react-lite";
import SmallIcon from "../tests/SmallIcon";
import handler from "./script";


const Sections = observer((props) => {
    return (
      <div>
        <div className="section-block">
            <div className="test-block stat-section">
                <div className="section__header stat-section__header">
                    <h2>{qa.questions.length} вопроса/ов</h2>
                </div>
                <div className="stat-section__buttons">
                    <button id="summary" className="stat-section__button stat-section__button_active">СВОДКА</button>
                </div>
            </div>
        </div>
          {qa.questions.map((q, Qindex) => {
            return(
              <div className="section-block" key={q.id}>
                <div className="test-block section">
                    <div className="section__header">
                      <h2>{Qindex+1}. {q.title}</h2>
                    </div>
                    <div className="section__body">
                      <p>{q.answers.length} ответа/ов</p>
                      {(q.type === "oneOfList")? 
                      <div className="chartblock" style={{display: 'flex', margin: '0 auto', justifyContent: 'center', height: '200px', width: '550px'}}>
                        <canvas id="Chart10"></canvas>
                        {document.addEventListener("DOMContentLoaded", function() {
                          console.log('ahaha')
                          qa.createChartOne(document.getElementById('Chart10'), Qindex)
                        })}
                      </div>
                      :
                      (q.type === "severalOfList")?
                      <div className="chartblock" style={{display: 'flex', margin: '0 auto', justifyContent: 'center', height: '200px', width: '550px'}}>
                        <canvas id="Chart20"></canvas>
                        {document.addEventListener("DOMContentLoaded", function() {
                          qa.createChartSeveral(document.getElementById('Chart20'), Qindex)
                        })}
                      </div>
                      :
                      (q.type === "text")?
                      <div className="chartblock">
                        <p style={{margin: '10px 0'}}>Последние ответы</p>
                        {q.answers.map((a, aindex) => {
                          if (aindex >= q.answers.length - 3){
                            return (
                              <div className="var" style={{backgroundColor: '#4300474D'}} key={a.id}>
                                {a.text}
                              </div>
                            )
                          }
                        })}
                      </div>
                      :
                      null
                      }
                    </div>
                </div>
              </div>
              
            )}
          )
          }
      </div>
    )
})       

export default Sections