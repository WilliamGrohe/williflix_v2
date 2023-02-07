import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function CarouselComponent() {
  const APIKEY = import.meta.env.VITE_APIKEY;
  const imagePath = "https://image.tmdb.org/t/p/w500";

  const [movies, setMovies] = useState([]);

  // console.log(APIKEY)
  useEffect(() => {
    //consumindo a API

    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div className="block justify-center items-center p-6">
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
        {movies.map((movie) => {
          return (
            <div className="m-1" key={movie.key}>
              <img
                className="rounded-lg"
                src={`${imagePath}${movie.poster_path}`}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
