import LogoPng from '../assets/logo.png'

export function Header() {
  return (
    <header>
        <div className="flex pr-8 items-center justify-between w-[100vw]">
          <img className="h-8 m-4" src={LogoPng} alt="WILLIFLIX" />
          <nav className="flex gap-3 text-zinc-400">
            <a className="hover:text-zinc-50" href="#">Inicio</a>
            <a className="hover:text-zinc-50" href="#">Séries</a>
            <a className="hover:text-zinc-50" href="#">Filmes</a>
            <a className="hover:text-zinc-50" href="#">Documentários</a>
          </nav>
        </div>
      </header>
  )
}