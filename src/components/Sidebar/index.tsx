import { Container } from "./styles";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function IconMusicArtist() {
  return (
    <svg height="2.3em"
    width="2.3em"
    viewBox="0 0 24 24"
    fill="currentColor"
    color="white"
    >
      <path d="M15.75 8l-3.74-3.75a3.99 3.99 0 016.82-3.08A4 4 0 0115.75 8zm-13.9 7.3l9.2-9.19 2.83 2.83-9.2 9.2-2.82-2.84zm-1.4 2.83l2.11-2.12 1.42 1.42-2.12 2.12-1.42-1.42zM10 15l2-2v7h-2v-5z" />
    </svg>
  );
}
function IconFolderMusicOutline() {
  return (
    <svg
      height="2.3em"
      width="2.3em"
    viewBox="0 0 24 24"
    fill="currentColor"
    >
      <path d="M22 8v3h-2V8H4v10h9.78c-.4.59-.65 1.26-.74 2H4a2 2 0 01-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 012 2m-3.5 5v5.21a2.5 2.5 0 10-1 4.79 2.5 2.5 0 002.5-2.5V15h2v-2h-3.5z" />
    </svg>
  );
}

function _x32_(){
  return(
    <svg
     height="2.3em"
     width="2.3em"
     id="_x32_"
     viewBox="0 0 512 512"
     fill="#000000">
     <style type="text/css">
     fill:#000000
     </style>
     <path className="st0" d="M412.606,0H99.379c-28.114,0-50.91,22.795-50.91,50.917v413.164c0,13.108,5.363,25.649,14.849,34.687 c9.501,9.045,22.288,13.81,35.374,13.175l286.233-13.84v-0.008c10.651-0.09,20.87-2.286,30.161-6.222 c14.252-6.028,26.337-16.066,34.882-28.719c8.559-12.645,13.564-27.987,13.564-44.367V50.917C463.531,22.795,440.735,0,412.606,0z M433.953,418.788c-0.015,6.916-1.404,13.414-3.914,19.36c-3.765,8.904-10.098,16.536-18.046,21.9 c-7.948,5.37-17.433,8.478-27.785,8.484c-6.514-0.007-12.966-1.561-19.151-4.698c-9.261-4.705-17.986-13.056-24.498-25.306 c-6.514-12.234-10.771-28.36-10.771-48.184v-8.828c0-3.025-1.524-5.841-4.048-7.507c-2.525-1.657-5.722-1.942-8.485-0.739 L94.778,469.131c-3.705,1.591-7.962,1.225-11.338-0.993c-3.362-2.219-5.393-5.983-5.393-10.009V53.546 c0-13.235,10.726-23.961,23.961-23.961h307.968c13.236,0,23.976,10.726,23.976,23.961V418.788z"></path> <path className="st0" d="M282.119,177.43c-20.891-10.09-38.54-32.857-38.54-32.857v15.162v124.116 c-6.513-2.398-14.222-3.108-22.176-1.576c-19.084,3.668-32.215,18.725-29.354,33.611c2.868,14.894,20.659,23.984,39.744,20.301 c16.94-3.256,29.166-15.491,29.697-28.622h0.097V198.904c54.801,6.692,45.8,45.48,42.014,56.855 C335.181,220.377,318.764,195.109,282.119,177.43z"></path>
    </svg>
  );
}

function Icon(){
  return(
<svg
  height="2.3em"
  width="2.3em"
  viewBox="0 0 32 32"
  version="1.1"
  fill="#fff">
  <g id="Icon">

<path d="M4,4.998l0.002,22.002c0,0.552 0.448,1 1,1c0.552,-0 1,-0.448 1,-1l-0.002,-22.002c-0,-0.552 -0.448,-1 -1,-1c-0.552,-0 -1,0.448 -1,1Z"/>
<path d="M10.998,5.004l0.002,21.996c0,0.552 0.448,1 1,1c0.552,-0 1,-0.448 1,-1l-0.002,-21.996c-0,-0.552 -0.448,-1 -1,-1c-0.552,-0 -1,0.448 -1,1Z"/>
<path d="M15.108,5.356l10.996,22c0.247,0.493 0.848,0.694 1.341,0.447c0.494,-0.247 0.694,-0.848 0.448,-1.341l-10.996,-22c-0.247,-0.494 -0.848,-0.695 -1.342,-0.448c-0.494,0.247 -0.694,0.848 -0.447,1.342Z"/>
  </g>
</svg>)
}


export function Sidebar() {
  const [menuOpen, setmenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setmenuOpen(!menuOpen)
  }

  return(
    <Container isMenuOpen={menuOpen}>
    <button type='button' onClick={handleToggleMenu}>
      <Icon />
    </button>
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="active">
            <IconMusicArtist />
            <span>Mic</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="myfolder">
            <IconFolderMusicOutline />
            <span>Folder</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="letras" >
            <_x32_ />
            <span>Lyrics</span>
          </NavLink>
        </li>
      </ul>
    </nav>
    </Container>
  )
}
