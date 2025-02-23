import {
  LuChevronLeft,
  LuChevronRight,
  LuChevronsLeft,
  LuChevronsRight,
} from "react-icons/lu";
import { useEffect, useState } from "react";
import CardList from "./card-list";
import axios from "axios";
import { FetchPokemonProps, Species } from "../@types/types";

export default function Home() {
  const [characters, setCharacters] = useState<FetchPokemonProps>();
  const [allCharacters, setAllCharacters] = useState<FetchPokemonProps>();
  const [dataSearch, setDataSearch] = useState<Species[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getCharacters() {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
      );

      setCharacters(response.data);
    }
    getCharacters();
  }, []);

  async function findPokemonByName(searchValue: string) {
    if (searchValue === "") setDataSearch([]);

    const result = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${characters?.count}&offset=0`
    );
    setAllCharacters(result.data);

    if (searchValue !== "") {
      const filteredCharacters = allCharacters?.results.filter((character) =>
        character.name.toLowerCase().includes(searchValue.toLowerCase())
      );

      if (filteredCharacters) {
        setDataSearch(filteredCharacters);
      }
    }

    console.log(dataSearch);
  }

  function goToNextPage() {
    if (characters?.next) {
      axios
        .get(characters?.next)
        .then((response) => {
          setCharacters(response.data);
        })
        .catch((error) => {
          console.error(error);
        });

        setPage(page + 1);
    }
  }

  function goToPreviousPage() {
    if (characters?.previous) {
      axios
        .get(characters?.previous)
        .then((response) => {
          setCharacters(response.data);
        })
        .catch((error) => {
          console.error(error);
        });

      setPage(page - 1);
    }
  }

  function goToFirstPage() {
    if (characters) {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
        .then((response) => {
          setCharacters(response.data);
        })
        .catch((error) => {
          console.error(error);
        });

        setPage(1);
    }
  }

  function goToLastPage() {
    if (characters) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${characters.count - (characters.count%10)}`)
        .then((response) => {
          setCharacters(response.data);
        })
        .catch((error) => {
          console.error(error);
        });

        setPage(Math.ceil(characters.count/10));
    }
  }

  return (
    <>
      <div className="flex justify-center items-center px-6 py-10 h-full tracking-wide">
        <div className="w-full space-y-10 flex flex-col items-center">
          <h1 className="text-center text-2xl lg:text-4xl font-bold">
            Welcome to the Pokemon API app!
          </h1>
          <div className="flex gap-2 w-full justify-center">
            <input
              onChange={(e) => findPokemonByName(e.target.value)}
              type="text"
              placeholder="Search for a Pokemon"
              className="px-1.5 lg:px-2 py-0.5 lg:py-1 border border-mint-500 rounded-lg w-full text-sm lg:text-base max-w-96 lg:max-w-md bg-opacity-20 outline-transparent focus:outline-mint-400 bg-zinc-800/40 placeholder:text-zinc-400/80"
            />
            {/* <button
              className="flex items-center gap-1.5 rounded-lg text-zinc-800 border border-mint-800 px-2 py-0.5 bg-mint-500 hover:bg-mint-400 transition ease-in-out duration-300 hover:scale-105 cursor-pointer"
            >
              Search
              <BiSearchAlt />
            </button> */}
          </div>
          <div className="rounded-3xl px-6 py-8 w-full flex justify-center items-center flex-col space-y-4 shadow-lg">
            <div className="w-full flex flex-col items-center lg:grid lg:grid-cols-2 mx-auto gap-6">
              {dataSearch.length > 0
                ? dataSearch?.map((character, index) => (
                    <CardList key={index} pokemonCharacter={character} />
                  ))
                : characters?.results.map((character, index) => (
                    <CardList key={index} pokemonCharacter={character} />
                  ))}
            </div>

            <div className="mt-8 flex flex-col items-center gap-5">
              <div className="flex gap-1.5">
                <button disabled={page === 1} onClick={goToFirstPage} className="border p-0.5 border-zinc-700/10 shadow-shape rounded-sm hover:scale-110 transition ease-in-out duration-200 cursor-pointer disabled:cursor-not-allowed disabled:hover:scale-100 disabled:opacity-60">
                  <LuChevronsLeft size={20} />
                </button>
                <button disabled={page === 1} onClick={goToPreviousPage} className="border p-0.5 border-zinc-700/10 shadow-shape rounded-sm hover:scale-110 transition ease-in-out duration-200 cursor-pointer disabled:cursor-not-allowed disabled:hover:scale-100 disabled:opacity-60">
                  <LuChevronLeft size={20} />
                </button>
                <button disabled={page === (characters && Math.ceil(characters?.count/10))} onClick={goToNextPage} className="border p-0.5 border-zinc-700/10 shadow-shape rounded-sm hover:scale-110 transition ease-in-out duration-200 cursor-pointer disabled:cursor-not-allowed disabled:hover:scale-100 disabled:opacity-60">
                  <LuChevronRight size={20} />
                </button>
                <button disabled={page === (characters && Math.ceil(characters?.count/10))} onClick={goToLastPage} className="border p-0.5 border-zinc-700/10 shadow-shape rounded-sm hover:scale-110 transition ease-in-out duration-200 cursor-pointer disabled:cursor-not-allowed disabled:hover:scale-100 disabled:opacity-60">
                  <LuChevronsRight size={20} />
                </button>
              </div>
              <div>
                <p className="opacity-70">Page {page} of {characters && Math.ceil(characters.count/10)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
