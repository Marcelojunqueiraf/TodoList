import { createContext, useContext } from "react"

const NomeContext =  createContext(null)

function Ola({elemento}){
    const nome = useContext(NomeContext)
    return(
        <li>
            <span>{elemento}</span>
            <span>olá {nome}</span>
        </li>
    )
}

function Lista({lista}){
    return (
        <Ola elemento={lista[0]}/>
    )
}

export default function Exemplo(){
    const lista = [1,2,3,4,5]
    const nome = "marcelo"
    return(
        <NomeContext.Provider value={nome}>
            <Lista lista={lista}/>
        </NomeContext.Provider>
    )
}