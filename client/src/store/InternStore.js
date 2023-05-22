import { makeAutoObservable } from "mobx";

class InS {
    constructor(){
        makeAutoObservable(this);
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

    
}

const ins = new InS()

export default ins