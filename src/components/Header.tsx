import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import LogoPng from '../assets/logo.png'

export function Header() {
  return (
    <header>
        <div className="flex pr-8 items-center justify-between w-full bg-[#141414] shadow-md">
          <img className="h-8 m-4" src={LogoPng} alt="WILLIFLIX" />
          <nav className="flex gap-3 text-zinc-400">
            <Link className="hover:text-zinc-50" to="/">Inicio</Link>
            <Link className="hover:text-zinc-50 flex items-center gap-1" to="/">
              <AiOutlineSearch /> Buscar
            </Link>
            
          </nav>
        </div>
      </header>
  )
}