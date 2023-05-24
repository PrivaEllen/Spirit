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
        {id:1, title:"Как вас зовут", type:"text", answers: [
            {id: 1, text: "Елена"},
            {id: 2, text: "Семен"}
        ]
        },
        {
            id:2, title:"Сколько вам лет", type:"oneOfList", answers: [
                {id: 1, text: "18-25"},
                {id: 2, text: "18-25"}
            ]
        },
        {
            id:3, title:"У вас есть высшее образование?", type:"oneOfList", answers: [
                {id: 1, text: "Да"},
                {id: 2, text: "Да"}
            ]
        },
        {
            id:4, title:"На какую должность вы претендуете?", type:"severalOfList", answers: [
                {id: 1, text: "Full-stack-разработчик"},
                {id: 2, text: "Backend-разработчик"}
            ]
        }
    ]
    
    createChartOne(ctx, index){
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

    createChartSeveral(ctx, index){
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

    createChartText(){
        const ctx30 = document.getElementById('Chart30');
        console.log(3);
    }

    addQuestion(){
        let newId = 1; 
        for (let i = 0; i < this.questions.length; i++){
            let question = this.questions[i];
            if (newId <= question.id) newId = question.id + 1;
        }
        this.questions.push(
            {id: newId, title:"", type:"", answers : []},
        );
    }

    addAnswer(Qindex){
        let answers = this.questions[Qindex].answers

        let newId = 1; 
        for (let i = 0; i < answers.length; i++){
            let answer = answers[i];
            if (newId <= answer.id) newId = answer.id + 1;
        }
        answers.push(
            {id: newId, text:""},
        );
    }
}

const qa = new QA()

export default qa