import { getSongs, } from "../../services/api"
import { useEffect, useState, createContext, ReactNode } from 'react'
import { SongsData } from "../../interfaces/SongsData"
//import { ChordsData } from '../../interfaces/ChordsData';
//postSong from "../../services/api";

interface SongsProps {
  songs: SongsData[]
  //chords: ChordsData[]
}

interface SongsProviderProps {
  children: ReactNode
}

export const SongsContext = createContext({} as SongsProps)

export default function SongsProvider({ children }: SongsProviderProps) {
  const [songs, setSongs] = useState<SongsData[]>([]);
  //const [chords, setChords] = useState<ChordsData[]>([]);

  useEffect(() => {
    ; (async () => {
      try {
        const songsRequest = await getSongs()
        //const chordsRequest = await getChords()
        //const songPost = await postSong()
        const request1 = [songsRequest]
        //const request2 = [chordsRequest]
        const [{ data: songsResponse }
        ] = await Promise.resolve(request1)
        //const [{ data: chordsResponse }] = await Promise.resolve(request2)
//Promise.all(request)
      setSongs(songsResponse)
      //setChords(chordsResponse)
    } catch (error) {
      console.log(error)
    }
  })()
}, [])
return (
    <SongsContext.Provider value={{ songs }}>
      {children}
    </SongsContext.Provider>
)
}
