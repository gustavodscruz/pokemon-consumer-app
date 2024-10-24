"use client";
import {parseISO, format } from 'date-fns'
import { PokemonType } from "@/utils/types";
import { useEffect, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { TbPokeball } from 'react-icons/tb';
import Pokedex from '@/components/Pokedex';

export default function Home() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const handleAllPokemons = async () => {
    const response = await fetch("http://localhost:3000/api/pokemon");
    const data: PokemonType[] = await response.json();
    setPokemons(data);
  };

  useEffect(() => {
    handleAllPokemons();
  }, []);

  const [showPokedex, setShowPokedex] = useState(false);
  const handleClose = () => {
    setShowPokedex(false);
  };

  const handleOpen = () => {
    setShowPokedex(true)
  }

  return (
    <div className="bg-transparent m-auto p-6">
      <div className="flex flex-col max-w-screen-xl p-4 m-auto">
        <div className="flex gap-4 justify-between w-full">
          <div className="flex flex-col gap-3 w-full m-5">
            <h2 className="text-5xl text-center">Meus Pokemons Capturados!</h2>
            <p className="text-center font-secondary text-2xl font-thin tracking-wide">
              Meus pokemons que capturei!!
            </p>
          </div>
        </div>
        <table className="w-full rounded-xl border-4 border-red-700">
          <thead className="bg-red-700 rounded-t-md">
            <tr className=''>
              <th className="p-4 m-auto text-center font-semibold tracking-wider">
                Nome
              </th>
              <th className="p-4 m-auto text-center font-semibold tracking-wider">
                Altura
              </th>
              <th className="p-4 m-auto text-center font-semibold tracking-wider">
                Data de Captura
              </th>
              <th className="p-4 m-auto text-center font-semibold tracking-wider">
                Peso
              </th>
              <th className="p-4 m-auto text-center font-semibold tracking-wider">
                Categoria
              </th>
              <th className="p-4 m-auto text-center font-semibold tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#cc8316] ">
            {pokemons && pokemons.length > 0 ? (
              pokemons.map((pokemon, indice) => (
                <tr key={indice} className='border-[#b91c1c] border-b-2 '>
                  <td className="p-4 m-auto text-center font-light flex justify-center w-max items-center gap-3">
                    <TbPokeball color='#b91c1c' size={20} className='hover:brightness-0 hover:saturate-100 hover:invert transition-all duration-300 cursor-pointer hover:scale-150' onClick={() => handleOpen}/>
                    <p className='min-w-28 flex text-left'>{pokemon.nome}</p>
                  </td>
                  <td className="p-4 m-auto text-center font-light ">
                    {pokemon.altura}
                  </td>
                  <td className="p-4 m-auto text-center font-light ">
                    {pokemon.dataDaCaptura ? format(parseISO(pokemon.dataDaCaptura), "dd/MM/yyyy") : "Data não disponível"}
                  </td>
                  <td className="p-4 m-auto text-center font-light ">
                    {pokemon.peso}
                  </td>
                  <td className="p-4 m-auto text-center font-light ">
                    {pokemon.categoria}
                  </td>
                  <td className="p-4 m-auto text-center font-light flex items-center gap-3 w-full justify-center">
                    <BsPencilSquare
                      color="#3b82f6"
                      size={25}
                      className=" cursor-pointer mt-1"
                      onClick={() => alert("Queijo é muito bom velho!")}
                    />
                    <MdDeleteOutline
                      color="#ef4444"
                      size={30}
                      className=" cursor-pointer "
                    />
                  </td>
                  <Pokedex show={showPokedex} onClose={handleClose} nomePokemon={pokemon.nome} />
                </tr>
                
              ))
            ) : (
              <tr>
                <td colSpan={6} className="p-4 m-auto text-center font-light">
                  Nenhum pokemon encontrado
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
