import { makeAutoObservable } from "mobx";

class SQ {
    constructor(){
        this._flag = 1;
        makeAutoObservable(this);
    }

    IncrementFlag(){
        this._flag += 1
    }

    sections = [
        {id:1, title:"", description:"", 
        questions: [
            {id:1, type:"oneOfList", title:"", isImportant: false, answers : []},
        ]
        }
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
                    {id:1, type:"oneOfList", title:"", isImportant: false, answers : []},
                ]
            });
    }

    removeSection(id){
        this.sections = this.sections.filter(section => section.id !== id);
    }

    changeSectionTitle(id, value){
        this.sections = this.sections.map((section) =>{
            return (section.id == id) ? {...section, title: value} : section;
        })
    }

    changeSectionDescr(id, value){
        this.sections = this.sections.map((section) =>{
            return (section.id == id) ? {...section, description: value} : section;
        })
    }

    addQuestion(){
        let len = this.sections.length;

        let newId = 1; 
        for (let i = 0; i < this.sections[len-1].questions.length; i++){
            let question = this.sections[len-1].questions[i];
            if (newId <= question.id) newId = question.id + 1;
        }
        this.sections[len-1].questions.push(
            {id:  newId, type:"oneOfList", title:"", isImportant: false, answers : []},
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
    
    changeQuestionImportant(Sid, Qid){
        this.sections = this.sections.map((section) => {
            return {...section, questions:
                (section.id === Sid)? 
                    section.questions.map((question) =>{
                        return (question.id === Qid)? {...question, isImportant: !question.isImportant}: question;
                    }):
                    section.questions
               };
        });
    }

    changeQuestionTitle(Sid, Qid, value){
        this.sections = this.sections.map((section) => {
            return {...section, questions:
                (section.id === Sid)? 
                    section.questions.map((question) =>{
                        return (question.id === Qid)? {...question, title: value}: question;
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

    changeAnswerTitle(Sid, Qid, Aid, value){
        this.sections = this.sections.map((section) => {
            return {...section, questions:
                 (section.id === Sid)? 
                    section.questions.map((question) => {
                        return {...question, answers:
                            (question.id === Qid)?
                            question.answers.map((answer) => {
                                return (answer.id === Aid)?
                                {...answer, title: value}:
                                answer;
                            }):
                            question.answers
                        }
                    }):
                    section.questions
                }
        });
    }
    
    changeAnswerRight(Sid, Qid, Aid){
        this.sections = this.sections.map((section) => {
            return {...section, questions:
                 (section.id === Sid)? 
                    section.questions.map((question) => {
                        return {...question, answers:
                            (question.id === Qid)?
                            question.answers.map((answer) => {
                                return (answer.id === Aid)?
                                {...answer, IsRight: !answer.IsRight}:
                                answer;
                            }):
                            question.answers
                        }
                    }):
                    section.questions
                }
        });
        console.log(this.sections[Sid-1].questions[Qid-1].answers[Aid-1])
    }
}

const sq = new SQ()

export default sq