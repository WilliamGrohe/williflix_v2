import { Link } from 'react-router-dom'
import LogoPng from '../assets/logo.png'

export function Header() {
  return (
    <header>
        <div className="flex pr-8 items-center justify-between w-[100vw] bg-[#141414] shadow-md">
          <img className="h-8 m-4" src={LogoPng} alt="WILLIFLIX" />
          <nav className="flex gap-3 text-zinc-400">
            <Link className="hover:text-zinc-50" to="/">Inicio</Link>
            <a className="hover:text-zinc-50" href="#">Séries</a>
            <a className="hover:text-zinc-50" href="#">Filmes</a>
            <a className="hover:text-zinc-50" href="#">Documentários</a>
          </nav>
        </div>
      </header>
  )
}