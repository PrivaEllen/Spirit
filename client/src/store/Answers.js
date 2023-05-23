import { makeAutoObservable } from "mobx";
import Chart from "chart.js/auto";

class QA {
    constructor(){
        makeAutoObservable(this);
        Chart.overrides['doughnut'].plugins.legend.position = 'right';
        Chart.overrides['doughnut'].responsive = true;
        Chart.overrides['doughnut'].maintainAspectRatio = false;
        Chart.overrides['doughnut'].color = '#fff';
        Chart.overrides['doughnut'].plugins.legend.labels.font = {
            size: 13,
            family: 'Roboto',
            weight: '300'
        }
        Chart.overrides['bar'].responsive = true;
        Chart.overrides['bar'].maintainAspectRatio = false;
        Chart.overrides['bar'].color = '#fff';
    }
    
    questions = [
        {id:1, title:"Вы владеете английским языком?", type:10,
        answers: [
            {id:1, text:"нет"},
            {id:2, text:"нет"},
            {id:3, text:"частично"},
            {id:4, text:"свободно"},
            {id:5, text:"норм"},
            {id:6, text:"1"},
            {id:7, text:"2"},
        ]
        },
        {id:2, title:"На какую вакансию вы расчитываете?", type:20,
        answers: [
            {id:1, text:"Фронтенд разработчик"},
            {id:2, text:"Бэкенд разработчик"},
            {id:3, text:"Фронтенд разработчик"},
            {id:4, text:"Фуллсте разработчик"},
        ]
        },
        {id:3, title:"Кто вы?", type:30,
        answers: [
            {id:1, text:"Первый"},
            {id:2, text:"8"},
            {id:3, text:"Понятия не имею"},
            {id:4, text:"че"},
        ]
        }
    ]
    
    createChart10(ctx, index){
        const chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [
                ],
                
                datasets: [{
                  data: [],
                  backgroundColor: [
                    '#ffaead',
                    '#ffd7a6',
                    '#fdffb6',
                    '#cbffbf',
                    '#9cf6ff',
                    '#a0c4ff',
                    '#bdb2ff',
                    '#ffc6ff',
                    '#fffffb'
                  ],
                  hoverOffset: 4,
                  borderWidth: 0,
                }]
              }
          });
        //labels
        let labels = this.questions[index].answers.map((a) => {
            return a.text
        });
        let setlabels = [... new Set(labels)];
        chart.data.labels.push(... setlabels);
        //data
        let data = Array();
        for (let i = 0; i < setlabels.length; i++){
            data.push(labels.filter(x => x === setlabels[i]).length)
        }
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(...data);
            dataset.label = 'Ответы';
        });
        //update
        chart.update();
    }

    createChart20(ctx, index){
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                ],
                
                datasets: [{
                  data: [],
                  backgroundColor: [
                    '#ffaead',
                    '#ffd7a6',
                    '#fdffb6',
                    '#cbffbf',
                    '#9cf6ff',
                    '#a0c4ff',
                    '#bdb2ff',
                    '#ffc6ff',
                    '#fffffb'
                  ]
                }]
              },
            plugins: {
                labels: {
                    fontSize: 50,
                    fontColor: ['#fff']
                }
            }
        });
        //labels
        let labels = this.questions[index].answers.map((a) => {
            return a.text
        });
        let setlabels = [... new Set(labels)];
        chart.data.labels.push(... setlabels);
        //data
        let data = Array();
        for (let i = 0; i < setlabels.length; i++){
            data.push(labels.filter(x => x === setlabels[i]).length)
        }
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(...data);
            dataset.label = 'Ответы';
        });
        //update
        chart.update();
    }

    createChart30(){
        const ctx30 = document.getElementById('Chart30');
        console.log(3);
    }
}

const qa = new QA()

export default qa