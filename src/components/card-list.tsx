export default function CardList({
  handleOpenModal,
}: {
  handleOpenModal: () => void;
}) {
  return (
    <div
      onClick={handleOpenModal}
      className="border border-zinc-900 bg-nile-blue-800 px-6 w-full max-w-md lg:max-w-3xl rounded-lg shadow-shape cursor-pointer hover:-translate-y-[1px] hover:translate-x-[1.8px]  transition ease-in-out duration-300"
    >
      <div className="flex items-center gap-5 py-2.5">
        <div className="flex items-center justify-center h-24 px-3 border border-mint-600 rounded-xl shadow-shape ">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
            alt="img"
          />
        </div>
        <span className="font-semibold tracking-wide text-lg lg:text-xl">
          <p>Bulbasaur</p>
        </span>
      </div>
    </div>
  );
}
