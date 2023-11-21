import { Head } from "../../../components/Head"
import { IconbarTitle } from "../../../components/IconbarTitle"
import { Sidebar } from "../../../components/Sidebar"
import { Container } from "../styles"

export default function MyFolderPage() {
  return <>
    <Container>
      <Head title='MyTitle' />
      <IconbarTitle>MYTITLE</IconbarTitle>
      <Sidebar />
    </Container>
  </>
}
