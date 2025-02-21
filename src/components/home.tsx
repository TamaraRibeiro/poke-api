import { BiSearchAlt } from "react-icons/bi";
import {
  LuChevronLeft,
  LuChevronRight,
  LuChevronsLeft,
  LuChevronsRight,
} from "react-icons/lu";
import { useState } from "react";
import CardList from "./card-list";
import ModalCardInfo from "./modal-card-info";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(!isModalOpen);
  }
  return (
    <>
      <div className="flex justify-center items-center px-6 py-10 relative h-full">
        <div className="w-full space-y-10 flex flex-col items-center">
          <h1 className="text-center text-2xl lg:text-4xl font-bold">
            Welcome to the Pokemon API app!
          </h1>
          <div className="flex gap-2 w-full justify-center">
            <input
              type="text"
              placeholder="Search for a Pokemon"
              className="px-1.5 py-0.5 border border-mint-500 rounded-lg w-full text-sm max-w-96 bg-opacity-20 outline-transparent focus:outline-mint-400 bg-zinc-800/40 placeholder:text-zinc-400/80"
            />
            <button className="flex items-center gap-1.5 rounded-lg text-zinc-800 border border-mint-800 px-2 py-0.5 bg-mint-500 hover:bg-mint-400 transition ease-in-out duration-300 hover:scale-105 cursor-pointer">
              Search
              <BiSearchAlt />
            </button>
          </div>
          <div className="rounded-3xl py-8 w-full flex justify-center items-center flex-col space-y-4 shadow-lg">
            {Array.from({ length: 10 }).map(() => (
                
            <CardList handleOpenModal={handleOpenModal} />
            ))}
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="flex gap-1.5">
                <div className="border p-0.5 border-zinc-700/10 shadow-shape rounded-sm hover:scale-110 transition ease-in-out duration-200 cursor-pointer">
                  <LuChevronsLeft size={20} />
                </div>
                <div className="border p-0.5 border-zinc-700/10 shadow-shape rounded-sm hover:scale-110 transition ease-in-out duration-200 cursor-pointer">
                  <LuChevronLeft size={20} />
                </div>
                <div className="border p-0.5 border-zinc-700/10 shadow-shape rounded-sm hover:scale-110 transition ease-in-out duration-200 cursor-pointer">
                  <LuChevronRight size={20} />
                </div>
                <div className="border p-0.5 border-zinc-700/10 shadow-shape rounded-sm hover:scale-110 transition ease-in-out duration-200 cursor-pointer">
                  <LuChevronsRight size={20} />
                </div>
              </div>
              <div>
                <p className="opacity-70">Page 1 of 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <ModalCardInfo handleOpenModal={handleOpenModal} />}
    </>
  );
}
