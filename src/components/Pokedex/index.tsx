import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { TiTimesOutline } from "react-icons/ti";
import { PokemonType } from "@/utils/types";

const Pokedex = ({
  show,
  onClose,
  pokemon,
}: {
  show: boolean;
  onClose: () => void;
  pokemon: PokemonType;
}) => {
  const [imagem, setImagem] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handlePokemonInfo = async () => {
    try {
      console.log(pokemon.nome.toLowerCase());
      const nomeRebaixado = pokemon.nome.toLowerCase();
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nomeRebaixado}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data : string = await response.json();
      if (data && data != "") {
        setImagem(data);
      } else {
        setImagem("https://httpgoats.com/404.jpg"); // Defina null se a URL da imagem não estiver disponível
      }
    } catch (error) {
      console.error("Failed to fetch pokemon info:", error);
      setImagem("https://httpgoats.com/404.jpg"); // URL de fallback em caso de erro
    }
  };

  useEffect(() => {
    handlePokemonInfo();
  }, [pokemon.nome]);

  useEffect(() => {
    if (show && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [show]);

  return (
    <dialog
      ref={dialogRef}
      className="rounded-lg z-10 flex justify-center items-center outline-none border-none"
    >
      <div className="bg-pokemon-green flex flex-col gap-2 p-6">
        <div className="flex justify-end w-full">
          <TiTimesOutline
            size={30}
            color="#c73b2c"
            className="block cursor-pointer hover:scale-125"
            onClick={onClose}
          />
        </div>
        <p className="text-2xl text-center font-bold text-white">
          {pokemon.nome}
        </p>
        {imagem ? (
          <Image
            height={200}
            width={200}
            objectFit="contain"
            className="object-contain"
            src={imagem}
            alt={`Foto do pokemon ${pokemon.nome}`}
          />
        ) : (
          <p>Imagem não disponível</p>
        )}
      </div>
    </dialog>
  );
};

export default Pokedex;