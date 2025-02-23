import { IoClose } from "react-icons/io5";
import { CharacterProps } from "../@types/types";

export default function ModalCardInfo({
  handleOpenModal,
  pokemonInfo,
}: {
  handleOpenModal: () => void;
  pokemonInfo: CharacterProps;
}) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-zinc-400/90 z-10">
      <div className="border border-zinc-900 bg-nile-blue-800 px-6 py-8 w-full max-w-[360px] lg:max-w-fit  rounded-lg shadow-shape relative">
        <IoClose
          onClick={handleOpenModal}
          size={24}
          className="absolute right-4 top-3 cursor-pointer hover:scale-110 transition ease-in-out duration-200 hover:text-mint-600 hover:rotate-90"
        />

        <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-10 lg:px-10 space-y-6 py-8 px-4 ">
          <div className="flex items-center justify-center max-w-40 border border-mint-300 lg:border-transparent rounded-xl shadow-shape lg:shadow-none">
            <img
              src={pokemonInfo.sprites.front_default}
              alt="img"
              className="lg:w-72"
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-8 w-full">
            <span className="font-semibold tracking-wide text-xl lg:text-3xl bg-gradient-to-b from-mint-400 to-nile-blue-400 bg-clip-text text-transparent uppercase">
              {pokemonInfo.name}
            </span>
            <div className="bg-nile-blue-800 px-8 py-4 w-full rounded-md shadow-md shadow-zinc-900 flex flex-col gap-3 max-w-96 border border-nile-blue-500">
              <div className="flex flex-col lg:flex-row items-center lg:items-baseline lg:gap-1.5">
                <span className="font-bold text-center text-lg text-mint-400/90">
                  Types
                </span>
                {pokemonInfo.types.map((item,index) => (
                  <p className="font-semibold text-zinc-300/90">{item.type.name + (index === pokemonInfo.types.length - 1 ? "" : ", ")}</p>
                ))}
              </div>

              <div className="flex flex-col lg:flex-row items-center lg:items-baseline lg:gap-1.5">
                <span className="font-bold text-center text-lg text-mint-400/90">Abilities</span>
                {pokemonInfo.abilities.map((item,index) => (
                  <p className="font-semibold text-zinc-300/90">{item.ability.name + (index === pokemonInfo.abilities.length - 1 ? "" : ", ")}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
