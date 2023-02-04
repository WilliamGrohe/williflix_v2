import LogoPng from '../assets/logo.png'

import '../styles/header.css'

export function Header() {
  return (
    <header>
        <div className="container">
          <img className="logo" src={LogoPng} alt="WILLIFLIX" />
          <nav>
            <a href="#">Inicio</a>
            <a href="#">Séries</a>
            <a href="#">Filmes</a>
            <a href="#">Documentários</a>
          </nav>
        </div>
      </header>
  )
}