import { useContext } from 'react'
import { SongsContext } from '../components/contexts/SongsContext'

export function useSongs() {
  return useContext(SongsContext)
}
