import { useEffect, useState } from "react";
import { CharacterProps, Species } from "../@types/types";
import axios from "axios";
import ModalCardInfo from "./modal-card-info";

export default function CardList({
  pokemonCharacter,
}: {
  pokemonCharacter: Species;
}) {
  const [pokemonData, setPokemonData] = useState<CharacterProps>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(!isModalOpen);
  }

  useEffect(() => {
    async function getPokemonData() {
      const response = await axios.get(`${pokemonCharacter.url}`);

      setPokemonData(response.data);
    }
    getPokemonData();
  }, [pokemonCharacter.url]);

  return (
    <>
      <div
        onClick={handleOpenModal}
        className="border border-zinc-900 bg-nile-blue-800 px-6 w-full max-w-md lg:max-w-3xl rounded-lg shadow-shape cursor-pointer hover:-translate-y-[1px] hover:translate-x-[1.8px]  transition ease-in-out duration-300"
      >
        <div className="flex items-center gap-5 py-2.5">
          <div className="flex items-center justify-center h-24 px-3 border border-mint-600 rounded-xl shadow-shape ">
            <img
              src={pokemonData && pokemonData.sprites.front_default}
              alt="img"
            />
          </div>
          <span className="font-semibold tracking-wide text-lg lg:text-2xl capitalize">
            {pokemonCharacter.name}
          </span>
        </div>
      </div>
      {isModalOpen && <ModalCardInfo handleOpenModal={handleOpenModal} pokemonInfo={pokemonData!} />}
    </>
  );
}
