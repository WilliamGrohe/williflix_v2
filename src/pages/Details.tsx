import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";

type MovieType = {
  id: number;
  title: string;
  image: string;
  sinopse: string;
  releaseDate: string;
  voteAverage: number;
  media_type: string;
};

export function Details() {
  const { id, media_type } = useParams();

  const APIKEY = import.meta.env.VITE_APIKEY;
  const imagePath = "https://image.tmdb.org/t/p/w500";

  const [movie, setMovie] = useState({} as MovieType);

  useEffect(() => {
    //consumindo a API

    fetch(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${APIKEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const { title, poster_path, overview, release_date, vote_average, media_type } = data;
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${imagePath}${poster_path}`,
          releaseDate: release_date,
          voteAverage: vote_average,
          media_type: media_type,
        };

        setMovie(movie as any);
        console.log(movie.voteAverage)
      });

  }, [id]);


  return (
    <>
    <Header />
      <div className="flex mt-16 justify-center items-center">
        <img className="rounded-lg w-80 shadow-md" src={movie.image} alt={`Poster do filme ${movie.title}`} />
        <div className="flex flex-col items-start max-w-[50%] ml-10">
          <h1 className="mt-12 mb-12 font-bold text-4xl">{movie.title}</h1>
          <span className="mb-4">{movie.sinopse}</span>
          <span className="mb-4">Rate: {movie.voteAverage}</span>
          <span className="opacity-50">Data de Lançamento: {movie.releaseDate}</span>

          <Link className="bg-red-700 px-8 py-3 mt-4 rounded-2xl text-center font-semibold hover:bg-red-800" to="/">VOLTAR</Link>
        </div>
      </div>
    </>
  );
}
