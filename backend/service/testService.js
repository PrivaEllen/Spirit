const Questions = require('../models/Questions');
const Answers = require('../models/Answers')
const Tests = require('../models/Tests');
const Sections = require('../models/Sections');
const internsAnswers = require('../models/internsAnswers');

class testService{
    async createTest(name, idCreator, img, typeId, category, privat){
        const test = Tests.build({
            name: name,
            idCreator: idCreator,
            category: category,
            private: privat,
            type: typeId,
            img: img,
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

    async createQuestion(questionText, idSection, type, obligatory, img){
        const question = Questions.build({
            questionText: questionText,
            idSection: idSection,
            type: type,
            obligatory: obligatory,
            img: img

        })
        await question.save()    
        return {
            question: question
        }
    }

    async createAnswer(text, correctness, idQuestion){
        const answer = Answers.build({
            text: text,
            correctness: correctness,
            idQuestion: idQuestion

        })
        await answer.save()    
        return {
            answer: answer
        }
    }

    async getImage(testId){
        const test = await Tests.findOne({
            where:{
                testId: testId
            }
        })
        
        const img = test.img
        return img
    }

    async createInternsAnswers(text, QuestionId, QuestionText, QuestionType, idAnswer, idIntern, idTest){
        const internAnswers = internsAnswers.build({
            text: text,
            QuestionId: QuestionId,
            QuestionText: QuestionText,
            QuestionType: QuestionType,
            idAnswer: idAnswer,
            idIntern: idIntern,
            idTest: idTest
        })

        await internAnswers.save()
        return internAnswers

    }

    async getInternsAnswers(idTest){
        const test = await Tests.findOne({
            where:{
                testId: idTest
            },
            include: [{
                model: Sections,
                include: [{
                    model: Questions,
                }]
            }]
        })

        let answers = []

        for (let i = 0; i < test.Sections.length; i++){
            let mas = test.Sections[i].Questions
            for (let j = 0; j < mas.length; j++){
                const answer = await internsAnswers.findAll({
                    where: {
                        QuestionId: mas[j].questionId
                    }
                })

                answers.push(answer)
            }

        }

        return {
            answers: answers
        }
    }
    
}

module.exports = new testService();