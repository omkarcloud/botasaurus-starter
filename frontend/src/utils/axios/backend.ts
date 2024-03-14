import axios from 'axios'
import fetchAdapter from './fetch-adapter'

export const backendBaseURL = process.env.IN_KUBERNETES ? 'http://0.0.0.0:8000/api' : 'http://127.0.0.1:8000/api'

const BackendAxios = axios.create({
  baseURL: backendBaseURL,
  adapter: fetchAdapter as any,
})

export default BackendAxios
