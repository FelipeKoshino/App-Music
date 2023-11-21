import axios from 'axios'
import { SongsData } from '../interfaces/SongsData'
import { ChordsData } from '../interfaces/ChordsData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getSongs = () => api.get<SongsData[]>('/songs')
export const getChords = () => api.get<ChordsData[]>('/chords')
//export const postSong = () => api.post<SongsData[]>('/songs')

export default api
