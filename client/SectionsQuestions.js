import { makeAutoObservable } from "mobx"

class SQ {
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

    constructor() {
        makeAutoObservable(this)
    }

    addSection(section){
        this.sections.push(section)
    }

    removeSection(id){
        this.sections = this.sections.filter(section => section.id !== id)
    }

    changeSectionTitle(id, event){
        console.log(event.target.value)
        this.sections = this.sections.map(section => section.id === id ? {...section, title: event.target.value} : section)
    }
}

const sq = new SQ()

export default sq