import { Container, TopStyle, Footer } from './styles'
import { Sidebar } from '../../components/Sidebar'
import { Topbar } from '../../components/Topbar'
import SongsProvider from '../../components/contexts/SongsContext'
import { Outlet } from 'react-router-dom'
//import logoImg from "../../imagens/music-svgrepo-com.svg"
//<img src={logoImg} />
import MusicPage from './Musicas'

export default function Main() {

  return (
    <>
      <Container>
        <Sidebar />

        <TopStyle>
          <SongsProvider>
            <section>
              <MusicPage />
              <Topbar />
            </section>
          </SongsProvider>

            <Outlet />
            <Footer />
        </TopStyle>
      </Container>
    </>

  )
}
