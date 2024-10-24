import { PokemonType } from '@/utils/types'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { TiTimesOutline } from 'react-icons/ti'

const Pokedex = ({show, onClose, nomePokemon}:{show : boolean, onClose : () => void, nomePokemon : PokemonType['nome']}) => {
  const [imagem, setImagem] = useState<string>("")
  const handlePokemonInfo = async() => {
    try{
      const response = await fetch(`http://localhost:3000/api/pokemon/${nomePokemon.toLowerCase()}`)
      if(!response.ok){
        throw new Error('Não encontrado!')
      }
      const data = await response.json()
      setImagem(data)
    } catch(error){
      console.error('Erro: ' + error)
      setImagem('')
    }
  }
  useEffect(() => {
    handlePokemonInfo()
  }, [])
  if(!show) return null
  return (
    <div className='h-screen w-screen opacity-40 z-10 flex justify-center items-center fixed left-0 top-0'>
          <div className="w-1/6 bg-pokemon-green flex flex-col gap-4">
            <p className='text-2xl text-center font-bold'>{nomePokemon}</p>
            <Image height={400} width={400} objectFit='contain' className='object-contain' src={imagem ?? 'https://httpgoats.com/static/codes/goats/small/404.avif'} alt={`Foto do pokemon ${nomePokemon} ${!imagem ? 'não encontrada' : ''}`} />
          </div>
          <TiTimesOutline size={30} color='#c73b2c' className='fixed top-5 right-5' onClick={onClose}/>
    </div>
  )
}

export default Pokedex