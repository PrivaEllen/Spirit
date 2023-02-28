import axios from "axios";
export const SERVER_URL = 'http://localhost:5000/spirit'

const $api = axios.create({
	withCredentials: true,
	baseURL: SERVER_URL
})

$api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	return config
})

$api.interceptors.response.use((config) => {
	return config
}, async (error) => {
	const originalRequest = error.config
	if (error.response.status === 401 && error.config && !error.config._isRetry){
		originalRequest._isRetry = true
		try{
			const response = await axios.get(`${SERVER_URL}/refresh`, {withCredentials: true})
			localStorage.setItem('token', response.data.accessToken)
			return $api.request(originalRequest)
		}
		catch(e){
			console.log('NOT AUTHORIZATION')
		}		
	}
	throw error
}
)

export default $api