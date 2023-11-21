import { Head } from "../../../components/Head"
import { IconbarTitle } from "../../../components/IconbarTitle"
import * as React  from "react"
import { StiloSong } from "./styles"

interface FormElements extends HTMLFormControlsCollection {
  songInput: HTMLInputElement
  autorInput: HTMLInputElement
  versaoInput: HTMLInputElement
}
interface songFormElement extends HTMLFormElement {
  readonly elements: FormElements
}


export default function SongFormPage(
{onSubmitSong}: {onSubmitSong: (song: string) => void})
{

function handleSubmit(event: React.FormEvent<songFormElement>) {
    event.preventDefault()
    onSubmitSong(event.currentTarget.elements.songInput.value)
}

  return <>
    <Head title='Letras' />
    <IconbarTitle>LETRAS</IconbarTitle>

    <StiloSong>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="songInput">Song: </label>
        <input type="text" id="songInput" />
        </div>
      <button type="submit">Submit Song</button><br/><br/>
    </form>
    </StiloSong>
  </>
}
