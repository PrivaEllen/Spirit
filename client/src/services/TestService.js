import $api from "../http/http";

export const getUserTests = async (idCreator) => {
    const {data} = await $api.get('/user/tests/' + idCreator)
    return data
}

export const getTest = async (testId) => {
    return $api.get('/user/test/' + testId)
}

export const getTypes = async () => {
    const {data} = await $api.get('/user/types')
    return data
}

export const saveTest = async (test) => {
    return $api.post('/create/test', {test})
}