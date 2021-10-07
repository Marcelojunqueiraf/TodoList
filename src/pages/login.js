import { useContext, useState } from "react"
import { Redirect } from "react-router"
import { Link} from "react-router-dom"
import UserContext from "../Contexts/context"
import api from "../resources/api"

export default function Login(){

    const {user, setUser} = useContext(UserContext)
    const [name, setName] = useState("")
    function handleSubmit(event){
        event.preventDefault()
        async function login(){
            api.get(`/login/?name=${name}`)
            .then((resp)=>{
                console.log(resp.data)
                setUser(resp.data)
            })
            .catch((err)=>{
                alert(err)
            })
        }
        login()
    }

    if(user == null){ //Ainda não fez login
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Insira seu nome de usuário</label>
                <br/>
                <input value={name} onChange={(event)=>{setName(event.target.value)}}/>
                <br/>
                <button>Fazer Login</button>
            </form>
            <Link to="/register">Não tem conta? se registre</Link>
        </div>
    )
    }else { //Já fez login
        return(<Redirect to="/"/>)
    }
}