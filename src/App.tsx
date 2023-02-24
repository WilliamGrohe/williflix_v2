
import './styles/global.css'

import { Header } from "./components/Header"
import { CarouselComponent } from './components/CarouselComponent'
import { BannerTop } from './components/BannerTop'

function App() {
  
  return (
    <>
      <Header />
      <BannerTop />
      <CarouselComponent type="movie" options="popular" description="Filmes Populares"/>
      <CarouselComponent type="tv" options="popular" description="Seriados Populares"/>
      
    </>
    )
}

export default App
