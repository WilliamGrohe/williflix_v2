import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { AiFillStar, AiFillPlaySquare } from "react-icons/ai";

type MovieType = {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  media_type: string;
  runtime: number;
};

type VideoType = {
  id: number;
  key: string;
};

export function Details() {
  const { id, media_type } = useParams();

  const APIKEY = import.meta.env.VITE_APIKEY;
  const imagePath = "https://image.tmdb.org/t/p/original";

  const [movie, setMovie] = useState({} as MovieType);
  const [video, setVideo] = useState({} as VideoType);

  async function fetchApi() {
    //buscando as informações
    const response = await fetch(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${APIKEY}&language=pt-BR&append_to_response=videos`
    );
    const data = await response.json();

    setMovie(data);

    //buscando a key do trailer
    const responseVideo = await fetch(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${APIKEY}&language=pt-BR`
    );
    const dataVideo = await responseVideo.json();
    setVideo(dataVideo.results[0]);
  }

  useEffect(() => {
    fetchApi();
  }, [id]);

  console.log(imagePath + movie.backdrop_path);

  return (
    <>
      <Header />
      <div
        className="bg-cover bg-opacity-80 bg-zinc-900 bg-blend-multiply"
        style={{ backgroundImage: `url(${imagePath + movie.backdrop_path})` }}
      >
        <div className="flex pt-16 justify-center items-center">
          <img
            className="rounded-lg w-80 shadow-md"
            src={imagePath + movie.poster_path}
            alt={`Poster do filme ${movie.title}`}
          />
          <div className="flex flex-col items-start max-w-[50%] ml-10">
            <h1 className="mt-12 mb-12 font-bold text-4xl">
              {movie.title || movie.name}
            </h1>
            <div className="">
              <h3 className="text-xl font-bold pb-2">Sinopse</h3>
              <span className="mb-4">{movie.overview}</span>
            </div>
            <span className="pt-4">
              <AiFillStar className="inline-flex" /> {movie.vote_average}
            </span>
            <span className="mb-4">
              Duração: {movie.runtime} minutos
            </span>
            <span className="opacity-50">
              Data de Lançamento: {movie.release_date || movie.first_air_date}
            </span>

            <Link
              className="bg-red-700 px-8 py-3 mt-4 rounded-2xl text-center font-semibold hover:bg-red-800"
              to="/"
            >
              VOLTAR
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mb-8">
          <h1 className="my-3 font-bold text-4xl flex-row">
            <AiFillPlaySquare className="inline-flex" /> Trailer
          </h1>
          <iframe
            width="789"
            height="329"
            src={`https://www.youtube.com/embed/${video.key}`}
            title="Fight Club - Theatrical Trailer Remastered in HD"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </>
  );
}
