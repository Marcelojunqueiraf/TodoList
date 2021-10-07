// Nome
// id
// bio

import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import UserContext from "../Contexts/context"
import api from "../resources/api"


function Profile(){
    const {user, setUser} = useContext(UserContext)
    const [name, setName] = useState(user.name)
    const [bio, setBio] = useState(user.bio)

    function handleSubmit(event){
        event.preventDefault()
        async function updateUser(){
            const data = {
                name: name,
                bio: bio
            }
            api.patch(`/user/${user.id}`, data)
            .then((resp)=>{
                setUser(resp.data)
            })
            .catch((err)=>{
                alert(err)
            })
        }
        updateUser()
    }

    return(
        <div>
            <Link to="/">Voltar</Link>
            <h1>Profile</h1>
            <span>{user.name}</span>
            <p>{user.bio}</p>
            <h1>Quer mudar suas informações?</h1>
            <form onSubmit={handleSubmit}>
            <label>Nome de usuário</label>
                <br/>
                <input value={name} onChange={(event)=>{setName(event.target.value)}}></input>
                <br/>
                <label>Biografia</label>
                <br/>
                <textarea cols="30" rows="8" value={bio} onChange={(event)=>{setBio(event.target.value)}}/>
                <br/>
                <button>Criar usuário</button>
            </form>
        </div>
    )

}

export default Profile