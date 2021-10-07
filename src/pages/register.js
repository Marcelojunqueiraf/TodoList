import { useContext, useState } from "react"
import api from "../resources/api"
import UserContext from "../Contexts/context"
import { Redirect } from "react-router"
import { Link } from "react-router-dom"

export default function Register(){
    const {user, setUser} = useContext(UserContext)
    const [name, setName] = useState("")
    const [bio, setBio] = useState("")

    function handleSubmit(event){
        event.preventDefault()

        async function create(){
            const data={
                name: name,
                bio: bio
            }
            api.post("/user/", data)
            .then((resp)=>{
                setUser(resp.data)
            })
            .catch((err)=>{
                alert(err)
            })
        }
        create()
    }

    if(user) return <Redirect to="/"/>
    else return(
        <div>
            <h1>Registre-se</h1>
            <form onSubmit={handleSubmit}>
            <label>Insira seu nome de usuário</label>
                <br/>
                <input value={name} onChange={(event)=>{setName(event.target.value)}}></input>
                <br/>
                <label>Insira sua biografia</label>
                <br/>
                <textarea cols="30" rows="8" value={bio} onChange={(event)=>{setBio(event.target.value)}}/>
                <br/>
                <button>Criar usuário</button>
            </form>
            <Link to="/login">Já tem conta? Entre</Link>
        </div>
    )
}