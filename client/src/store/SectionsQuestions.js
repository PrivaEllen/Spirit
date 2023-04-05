import { makeAutoObservable } from "mobx";

class SQ {
    constructor(){
        makeAutoObservable(this);
    }

    sections = [
        {id:1, title:"Первое знакомство", description:"Расскажите подробнее о вас", 
        questions: [
            {id:1, type:10, title:"Вы владеете английским языком?", isImportant: false, 
            answers : [{id:1, title:"Нет", IsRight: false},
                    {id:2, title:"Частично", IsRight: true}]},
            {id:2, type:10, title:"На какую вакансию вы рассчитываете?", isImportant: true,
            answers : []},
        ]
        },
        {id:2, title:"Пройдите опрос, дизайнер старался", description:"",
        questions: [
            {id:1, type:20, title:"Как дела?", isImportant: false, 
            answers: []},
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
                    {id:1, type:10, title:"", isImportant: false, answers : []},
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
            {id:  newId, type:10, title:"", isImportant: false, answers : []},
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

    changeQuestionType(Sid, Qid, value){
        this.sections = this.sections.map((section) => {
            return {...section, questions:
                (section.id === Sid)? 
                    section.questions.map((question) =>{
                        return (question.id === Qid)? {...question, type: value}: question;
                    }):
                    section.questions
               };
        });
    }

    addAnswer(Sindex, Qindex){
        let answers = this.sections[Sindex].questions[Qindex].answers

        let newId = 1; 
        for (let i = 0; i < answers.length; i++){
            let answer = answers[i];
            if (newId <= answer.id) newId = answer.id + 1;
        }
        answers.push(
            {id: newId, title:"", IsRight: false},
        );
    }

    removeAnswer(Sid, Qid, Aid){
        this.sections = this.sections.map((section) => {
            return {...section, questions:
                 (section.id === Sid)? 
                    section.questions.map((question) => {
                        return {...question, answers:
                            (question.id === Qid)?
                            question.answers.filter((answer) => answer.id !== Aid):
                            question.answers
                        }
                    }):
                    section.questions
                }
        });
    }

    moveAnswerTop(Sid, Qid, index){
        for (let i = 0; i < this.sections.length; i++){
            if (this.sections[i].id === Sid){
                let section = this.sections[i];
                for (let j = 0; j < section.questions.length; j++){
                    if (section.questions[i].id === Qid){
                        let question = section.questions[j];
                        question.answers.splice(index-1, 2, question.answers[index], question.answers[index-1]);
                        break;
                    }
                }
            }
        }
    }

    moveAnswerDown(Sid, Qid, index){
        for (let i = 0; i < this.sections.length; i++){
            if (this.sections[i].id === Sid){
                let section = this.sections[i];
                for (let j = 0; j < section.questions.length; j++){
                    if (section.questions[i].id === Qid){
                        let question = section.questions[j];
                        question.answers.splice(index, 2, question.answers[index+1], question.answers[index]);
                        break;
                    }
                }
            }
        }
    }
}

const sq = new SQ()

export default sq