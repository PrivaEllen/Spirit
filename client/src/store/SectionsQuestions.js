import { makeAutoObservable } from "mobx";

class SQ {
    constructor(){
        makeAutoObservable(this);
    }

    sections = [
        {id:1, title:"Первое знакомство", description:"Расскажите подробнее о вас", 
        questions: [
            {id:1, title:"Вы владеете английским языком?", isImportant: false},
            {id:2, title:"На какую вакансию вы рассчитываете?", isImportant: true},
        ]
        },
        {id:2, title:"Пройдите опрос, дизайнер старался", description:"",
        questions: [
            {id:1, title:"Как дела?", isImportant: false},
        ]},
    ]

    addSection(){
        let newId = 1; 
        for (let i = 0; i < this.sections.length; i++){
            let section = this.sections[i];
            if (newId <= section.id) newId = section.id + 1;
        }
        this.sections.push(
            {id: newId, title:"", description:"",
                questions: [
                    {id:1, title:"", isImportant: false},
                ]
            });
    }

    removeSection(id){
        this.sections = this.sections.filter(section => section.id !== id);
    }

    addQuestion(){
        let len = this.sections.length;

        let newId = 1; 
        for (let i = 0; i < this.sections[len-1].questions.length; i++){
            let question = this.sections[len-1].questions[i];
            if (newId <= question.id) newId = question.id + 1;
        }
        this.sections[len-1].questions.push(
            {id:  newId, title:"", isImportant: false},
        );
    }

    removeQuestion(Sid, Qid){
        this.sections = this.sections.map((section) => {
            return {...section, questions:
                 (section.id === Sid)? 
                    section.questions.filter((question) => question.id !== Qid):
                    section.questions
                }
        });
    }

    moveQuestionTop(Sid, index){
        for (let i = 0; i < this.sections.length; i++){
            if (this.sections[i].id === Sid){
                let section = this.sections[i];
                section.questions.splice(index-1, 2, section.questions[index], section.questions[index-1]);
            }
        }
    }

    moveQuestionDown(Sid, index){
        for (let i = 0; i < this.sections.length; i++){
            if (this.sections[i].id === Sid){
                let section = this.sections[i];
                section.questions.splice(index, 2, section.questions[index+1], section.questions[index]);
            }
        }
    }

}

const sq = new SQ()

export default sq