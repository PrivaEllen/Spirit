const Questions = require('../models/Questions');
const Answers = require('../models/Answers')
const Tests = require('../models/Tests');
const Sections = require('../models/Sections');

class testService{
    async createTest(name, description, idCreator, type, category){
        const test = Tests.build({
            name: name,
            description: description,
            idCreator: idCreator,
            type: type,
            category: category
        })
        await test.save()

        return{
            test: test
        }
    }

    async createSection(name, description, id_test){
        const section = Sections.build({
            name: name,
            description: description,
            id_test: id_test
        })
        await section.save()

        const test = await Tests.findOne({
            where: {
                testId: id_test
            }
        })
        
        if (test != null){
            test.countSections = test.countSections + 1;
            await test.save()
        }

        return{
            section: section
        }
    }

    async createQuestion(questionText, idSection, type){
        const question = Questions.build({
            questionText: questionText,
            idSection: idSection,
            type: type

        })
        await question.save()    
        return {
            question: question
        }
    }

    async createAnswer(text, idQuestion){
        const answer = Answers.build({
            text: text,
            idQuestion: idQuestion

        })
        await answer.save()    
        return {
            answer: answer
        }
    }
}

module.exports = new testService();