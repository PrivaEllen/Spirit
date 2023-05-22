import $api from "../http/http";

export const getUserTests = async (idCreator) => {
    const {data} = await $api.get('/user/tests/' + idCreator)
    return data
}

export const getTest = async (testId) => {
    const {data} = await $api.get('/user/test/' + testId)
    return data
}

export const getTypes = async () => {
    const {data} = await $api.get('/user/types')
    return data
}

export const saveTest = async (test) => {
    const {data} = await $api.post('/create/test', {test})
    return data
}

export const saveChangedTest = async (test) => {
    const {data} = await $api.post('/save/test', {test})
    return data
}

export const deleteTest = async (testId) => {
    return $api.post('/delete/test', {testId})
}

export const saveChanges = async (formData) => {
    return $api.post('/save/changes', formData)
}

export const renameTest = async (testId, name) => {
    return $api.post('/rename/test', {testId, name})
}

export const changePrivateOfTest = async (testId) => {
    return $api.post('/change/private', {testId})
}

export const changePhoto = async (formData) => {
    const data = await $api.post('change/photo', formData)
    return data
}

export const addIntern = async (testId, email, idHr) => {
    return $api.post('add/intern', {testId, email, idHr})
}

export const createInternsAnswers = async (internAnswers) => {
    const {data} = await $api.post('/create/intern/answers', {internAnswers})
    return data
}