import { Routes, Route, } from 'react-router-dom'
//{createRoutesFromElements} from 'react-router-dom'

import MainPage from './pages/Main'
import MusicPage from './pages/Main/Musicas'
import MyFolderPage from './pages/Main/MyFolder'
//import SongFormPage from './pages/Main/Letras'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/' element={<MusicPage />} />
      <Route path='myfolder' element={<MyFolderPage />} />
    </Routes>
  )
}
//<Route path='letras' element={<SongFormPage onSubmitSong={createRoutesFromElements} />} />
