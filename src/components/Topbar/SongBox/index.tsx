import { SongsData } from "../../../interfaces/SongsData";
import { ListSongs, ContentBox, ChordBox } from "../styles";
import useFetchPerson from "../useFetchPerson"

const url = 'https://api.genius.com/songs';

export function SongBox(value: { songs: SongsData[]; busca: string; }
  ) {
const {isError, isLoading, dataly} = useFetchPerson(url)

if (isLoading) {
  return <h2>Loading...</h2>;
}
if (isError) {
  return <h2>There was an error...</h2>;
}
console.log(dataly)
//const { } = dataly;

  return <ListSongs>
        {value.songs.filter(item => {
      return item.música == value.busca;
    }).map(it => <>
        <article key="it.música">
          <span>{it.tom}</span>
          <br /><br /> <img src={require('./../../../imagens/headphone.png')} />
          <br /><p>{it.música}</p>

          <a target="_blank" rel="noopener noreferrer" href={`${it.lyric}`}>link to lyrics</a>

          <p> <span>{it.versão || ""}</span> <br />{it.autor}
          </p><br />
        </article>

          <ContentBox key="it.música">
            {it.chord1 != "" && <ChordBox>{it.chord1}</ChordBox> || ""}
            {it.chord2 != "" && <ChordBox>{it.chord2}</ChordBox> || ""}
            {it.chord3 != "" && <ChordBox>{it.chord3}</ChordBox> || ""}
            {it.chord4 != "" && <ChordBox>{it.chord4}</ChordBox> || ""}
          </ContentBox>
        </>)}
    </ListSongs>;
}
