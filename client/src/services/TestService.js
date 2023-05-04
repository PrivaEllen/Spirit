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
    return $api.post('/create/test', {test})
}

export const saveChangedTest = async (test) => {
    return $api.post('/save/test', {test})
}

export const deleteTest = async (testId) => {
    return $api.post('/delete/test', {testId})
}

export const sendTest = async (email) => {
    return $api.post('/send/test', {email})
}

export const saveChanges = async (id, Name, Surname, company, phone, emailForFeedback) => {
    return $api.post('/save/changes', {id, Name, Surname, company, phone, emailForFeedback})
}

export const renameTest = async (testId, name) => {
    return $api.post('/rename/test', {testId, name})
}

export const changePrivateOfTest = async (testId) => {
    return $api.post('/change/private', {testId})
}