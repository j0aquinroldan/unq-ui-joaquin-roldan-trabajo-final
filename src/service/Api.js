import axios from "axios";
axios.defaults.baseURL = 'https://preguntados-api.vercel.app/api'

export const getDifficulties = () => {
    return axios.get('/difficulty').then(({ data }) => { return data })
}

export const getQuestions = () => {
    return axios.get(`/questions?difficulty=${localStorage.getItem('difficulty')}`)
        .then(({ data }) => { return data })
}

export const postAnswer = (questionId, option) => {
    return axios.post(`/answer`, { questionId, option })
        .then((data) => { return data })
}

