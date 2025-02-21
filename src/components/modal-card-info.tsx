import { IoClose } from "react-icons/io5";

export default function ModalCardInfo({
  handleOpenModal,
}: {
  handleOpenModal: () => void;
}) {
  return (
    <div className="fixed top-0 w-full h-full flex justify-center items-center bg-zinc-400/90 z-10">
      <div className="border border-zinc-900 bg-nile-blue-800 px-6 py-8 w-full max-w-[360px] lg:max-w-1/2 rounded-lg shadow-shape relative">
        <IoClose
          onClick={handleOpenModal}
          size={24}
          className="absolute right-4 top-3 cursor-pointer hover:scale-110 transition ease-in-out duration-200 hover:text-mint-600 hover:rotate-90"
        />

        <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-10 space-y-6 py-8 px-4 lg:px-20">
          <div className="flex items-center justify-center w-40 lg:min-w-40 lg:max-w-full border border-mint-300 lg:border-transparent rounded-xl shadow-shape lg:shadow-none">
            
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt="img" className="w-72" />
          </div>
          
          <div className="flex flex-col items-center justify-center gap-8 w-full">
            <span className="font-semibold tracking-wide text-xl lg:text-3xl bg-gradient-to-b from-mint-400 to-nile-blue-400 bg-clip-text text-transparent uppercase">
              Bulbasaur
            </span>
            <div className="bg-nile-blue-800 px-8 py-4 w-full rounded-md shadow-md shadow-zinc-900 flex flex-col gap-3 max-w-96 border border-nile-blue-500">
              <div className="flex flex-col lg:flex-row items-center lg:items-baseline lg:gap-1.5">
                <span className="text-zinc-300/90 text-center text-lg">
                  Type:
                </span>
                <p>One type</p>
              </div>
              {/* lg:flex-row lg:justify-end lg:items-end */}

              <div className="flex flex-col lg:flex-row items-center lg:items-baseline lg:gap-1.5">
                <span className="text-zinc-300/90">Abilities:</span>
                <p>One ability, two ability, three</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>{pokemon.abilities[0].ability.name}</div>;
        <div>{pokemon.types[0].type.name}</div>; */}
    </div>
  );
}
