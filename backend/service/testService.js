const Questions = require('../models/Questions');
const Answers = require('../models/Answers')
const Tests = require('../models/Tests');
const Sections = require('../models/Sections');

class testService{
    async createTest(name, description, idCreator, category, privat, typeId, img){
        const test = Tests.build({
            name: name,
            description: description,
            idCreator: idCreator,
            category: category,
            private: privat,
            type: typeId,
            img: img
        })
        await test.save()

        return{
            test: test
        }
    }

    async changeTest({testId, name, description, type, img}){
        const newTest = Tests.findOne({
            where:{
                testId: testId
            }
        })
        newTest.name = name
        newTest.description = description
        newTest.type = type
        newTest.img = img
        await newTest.save()

        return{
            newTest: newTest
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

    async changeSection(idSection, name, description){
        const newSection = Sections.findOne({
            where:{
                idSection: idSection
            }
        })
        newSection.name = name
        newSection.description = description
        await newSection.save()

        return{
            newSection: newSection
        }
    }

    async deleteSection(idSection){
        const section = await Sections.destroy({
            where: {
                idSection: idSection
            },
            include: [{
                model: Questions,
                include: [{
                    model: Answers,
                }]
            }]
        })
        return {
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

    async changeQuestion({questionId, questionText, type, obligatory, img}){
        const newQuestion = Questions.findOne({
            where:{
                questionId: questionId
            }
        })
        newQuestion.questionText = questionText
        newQuestion.type = type
        newQuestion.obligatory = obligatory
        newQuestion.img = img
        await newQuestion.save()    
        return {
            newQuestion: newQuestion
        }
    }

    async deleteQuestion(questionId){
        const question = await Questions.destroy({
            where: {
                questionId: questionId
            },
            include: [{
                model: Answers,
            }]
        })
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

    async changeAnswer(answerId, text, correctness){
        const newAnswer = Answers.findOne({
            where:{
                answerId: answerId
            }
        })
        newAnswer.text = text,
        newAnswer.correctness = correctness,
        
        await newAnswer.save()    
        return {
            newAnswer: newAnswer
        }
    }

    async deleteAnswer(answerId){
        const answer = await Answers.destroy({
            where: {
                answerId: answerId
            }
        })
        return {
            answer: answer
        }
    }

}

module.exports = new testService();