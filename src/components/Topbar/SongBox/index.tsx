import { SongsData } from "../../../interfaces/SongsData";
import { ListSongs, ContentBox, ChordBox } from "../styles";

export function SongBox(value: { songs: SongsData[]; busca: string; }
  ) {

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
