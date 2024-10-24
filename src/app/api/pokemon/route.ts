import { PokemonType } from "@/utils/types"
import { NextResponse } from "next/server"

export async function GET() {
    try{
        const response = await fetch('http://localhost:8080/pokemon')
        const data : PokemonType = await response.json()
        return NextResponse.json(data)
    }
    catch(error){
        console.error("Não consegui capturar os dados dos pokemons! " + error)
        return NextResponse.json({error: "Não consegui capturar os dados!" + error})
    }
}