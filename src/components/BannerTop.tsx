import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type MovieType = {
  title: string;
  name: string;
  backdrop_path: string;
  poster_path: string;
  id: number;
  overview: string;
  media_type: String;
};

export function BannerTop() {
  const APIKEY = import.meta.env.VITE_APIKEY;
  const imagePath = "https://image.tmdb.org/t/p/original";

  const [movie, setMovie] = useState({} as MovieType);

  useEffect(() => {
    //consumindo a API

    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data.results[0]));
  }, []);

  const backgroundImage = imagePath + movie.backdrop_path;

  return (
    <div
      className="w-full h-[500px] bg-cover flex overflow-x-hidden m-0"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="p-10 flex content-center flex-col">
        <h1 className="text-6xl font-bold flex-wrap w-max-96 w-60">
          {movie.title || movie.name}
        </h1>
        <span className="w-96  rounded-3xl p-2 mt-2 backdrop-blur-md">
          {movie.overview}
        </span>
        <Link
          className="bg-red-700 w-[40%] px-8 py-3 mt-4 rounded-2xl text-center font-semibold hover:bg-red-800"
          to={`/details/${movie.media_type}/${movie.id}`}
          key={movie.id}
        >
          SAIBA MAIS
        </Link>
      </div>
    </div>
  );
}
