import $api from "../http/http";

export const createTest = async (name, description, idCreator, privat, typeId) => {
    return $api.post('/create/test', {name, description, idCreator, privat, typeId})
}

export const createSection = async (name, description, id_test) => {
    return $api.post('/create/section', {name, description, id_test})
}

export const createQuestion = async (questionText, idSection, type) => {
    return $api.post('/create/question', {questionText, idSection, type})
}

export const createAnswer = async (text, idQuestion) => {
    return $api.post('/create/answer', {text, idQuestion})
}

export const getUserTests = async (idCreator) => {
    console.log('getUserTestsId', idCreator);
    const {data} = await $api.get('/user/tests/' + idCreator)
    return data
}

export const getTest = async (testId) => {
    return $api.get('/user/test/' + testId)
}
