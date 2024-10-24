import { NextResponse } from "next/server"

// { params }: { params: { nome: string } }
export async function GET({ params }: { params: { nome: string }}) {
    try{
    console.log(`Esse é o nome: ${params.nome}`)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.nome}`)
    if (!response.ok) {
        throw new Error('Não encontrado')
    }
    const data = await response.json()
    const imagem = data['sprites']['front_default']
    console.log(`Esse é a imagem: ${imagem}`)
    return NextResponse.json(imagem)
    } catch(error){
        console.error("Não foi possível capturar a imagem" + error)
        return NextResponse.json({error: "Imagem não encontrada do seu pokemon!"})

    }
}