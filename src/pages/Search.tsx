import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

type SearchType = {
  id: number;
  poster_path: string;
  name: string;
  media_type: string;
};

export function Search() {
  const APIKEY = import.meta.env.VITE_APIKEY;

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const imagePath = "https://image.tmdb.org/t/p/w500";

  async function fetchSearchOnApi() {
    //buscando as informações
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${APIKEY}&language=pt-BR&query=${search}`
    );
    const data = await response.json();

    setSearchResults(data.results);
  }

  useEffect(() => {
    fetchSearchOnApi();
  }, [search]);

  return (
    <>
      <Header />
      <div className="flex ml-auto p-4">
        <input
          type="text"
          placeholder="buscar..."
          className="rounded-sm p-1 outline-none"
          value={search}
          onChange={(data) => setSearch(data.target.value)}
        />
        <button>
          <AiOutlineSearch className="text-xl" />
        </button>
      </div>

      <div className="">
        <ul className="flex flex-wrap">
          {searchResults.map((results: SearchType) => {
            return (
              <li className="m-4 " key={results.id}>
                <Link to={`/details/${results.media_type}/${results.id}`}>
                <img
                  className="rounded-lg h-60 shadow-md"
                  src={imagePath + results.poster_path}
                  alt={`Poster do filme ${results.name}`}
                />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
