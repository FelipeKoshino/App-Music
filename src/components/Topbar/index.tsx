import { SongBox } from "./SongBox"
import { ChangeEvent, SetStateAction, useState} from "react";
import { useSongs } from "../../hooks/useSongs";
import { SearchContainer, DropdownRow } from "./styles";

//Topbar() = Navbar()
export function Topbar() {
  const { songs } = useSongs()
  const [ busca, setBusca ] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBusca(event.target.value);
  }
  const onSearch = (searchTerm: SetStateAction<string>) => {
    setBusca(searchTerm);
  }

  return <>
    <SearchContainer>
      <div>
        <button className="butao" onClick={() => onSearch(busca)}>Search</button>
        <section>
          <input type="text" placeholder="Procurar música aqui..." value={busca} onChange={onChange} />
          {songs.filter(item => {
            const searchTerm = busca.toLowerCase();
            const fullName = item.música.toLowerCase();

            return (searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm);
          })
            .slice(0, 10).map((item) => (
              <DropdownRow key={item.música}
                onClick={() => onSearch(item.música)}>{item.música}
              </DropdownRow>
            ))}
        </section>
      </div>
    </SearchContainer>
    <SongBox   songs={songs} busca={busca}  />
  </>
}
