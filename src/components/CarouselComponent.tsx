import { type } from "os";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

type MoviesType = {
  id: number;
  poster_path: string;
}

type CarouselType = {
  options: string;
  type: string;
  description: string;
}

export function CarouselComponent({options, type, description}: CarouselType) {
  const APIKEY = import.meta.env.VITE_APIKEY;
  const imagePath = "https://image.tmdb.org/t/p/w500";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //consumindo a API

    fetch(
      `https://api.themoviedb.org/3/${type}/${options}?api_key=${APIKEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div className="block justify-center items-center p-6">
      <h2 className="text-xl text-zinc-50 font-semibold mb-4">{description}</h2>
      <ul>

      
      <Carousel
        showArrows
        infiniteLoop
        centerMode
        centerSlidePercentage={20}
        showThumbs={false}
        swipeScrollTolerance={5}
        autoPlay
        emulateTouch
      >
        {movies.map((movie: MoviesType) => {
          return (
            <Link to={`/details/${type}/${movie.id}` } key={movie.id}>
              <li className="m-1" >
                <img
                  className="rounded-lg"
                  src={`${imagePath}${movie.poster_path}`}
                  alt=""
                />
              </li>
            </Link>
          );
        })}
      </Carousel>
      </ul>
    </div>
  );
}
