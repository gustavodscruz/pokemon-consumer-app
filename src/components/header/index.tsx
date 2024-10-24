import Image from "next/image";
import React from "react";
import { MdCatchingPokemon } from "react-icons/md";

const Header = () => {
  return (
    <header className="p-5 bg-pokemon-green m-auto w-full h-full">
      <div className="flex gap-3 max-w-screen-xl justify-between m-auto items-center">
        <div className="flex justify-start gap-3 items-center">
          <Image
            src="/venusaur.gif"
            height={100}
            width={100}
            objectFit="cover"
            alt="Lucario "
          />
          <h1 className="font-secondary text-xl font-light text-pokemon-yellow-2 flex gap-3 items-center">
            VenuMon{" "}
            <MdCatchingPokemon
              color="#ffc21c"
              size={40}
              className="rotate-180"
            />
          </h1>
          
        </div>
        <div className="flex gap-3">
          <a
            href="#table"
            className=" group text-pokemon-yellow-2 font-semibold tracking-widest flex gap-2 
            items-center bg-[#005059] rounded-md py-3 px-5 hover:bg-[#dc2626] transition-all duration-300"
          >
            <p className="group-hover:text-white transition-all duration-300">Adicionar</p>
            <MdCatchingPokemon
              color="#dc2626"
              size={40}
              className="rotate-180 group-hover:brightness-0 group-hover:invert transition-all duration-300"
            />
          </a>
          <a
            href="#table"
            className=" group text-pokemon-yellow-2 font-semibold tracking-widest flex gap-2 
            items-center bg-[#005059] rounded-md py-3 px-5 hover:bg-[#dc2626] transition-all duration-300"
          >
            <p className="group-hover:text-white transition-all duration-300">Meus Pokemons</p>
            <MdCatchingPokemon
              color="#ffc21c"
              size={40}
              className="rotate-180 group-hover:brightness-0 group-hover:invert transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
