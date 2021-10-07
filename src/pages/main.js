import {useContext, useEffect, useState} from 'react'
import Todo from '../components/Todo';
import api from '../resources/api';
import UserContext from '../Contexts/context';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

function Main(){
      const [lista, setLista] = useState([])
      const [title, setTitle] = useState("")
      const [description, setDescription] = useState("")

      const {user} = useContext(UserContext)

      useEffect(()=>{
        async function getTodos(){
            api.get(`/user/${user.id}/todos/`)
            .then((resp)=>{
                setLista(resp.data)
            })
            .catch((err)=>{
                //redirecionar página
                console.log("ocorreu um erro" + err)
            })
          }
          getTodos()
      }, [user]//array de dependências
      )

      function handleCreation(event){
        event.preventDefault()

        const data ={
            title:title,
            description:description
        }

        async function createTodo(){
            api.post(`/user/${user.id}/todos/`, data)
            .then((resp)=>{
                const nTodo = resp.data
                setLista([...lista, nTodo])
                setTitle("")
                setDescription("")
            })
            .catch((err)=>{
                console.log("ocorreu um erro" + err)
            })
        }
        createTodo()
      }
    if(user){
    return(
        <div className="App">
        <h1>Todo List</h1>
        <h2>Olá <Link to="/profile">{user.name}</Link> seu id é {user.id}</h2>

        <form onSubmit={handleCreation}>
          <label>Title</label>
          <br/>
          <input id="title" value={title} onChange={(event)=>{setTitle(event.target.value)}}></input>
          <br/>
          <label>Description</label>
          <br/>
          <textarea id="description" cols="40" rows="8" value={description} onChange={(event)=>{setDescription(event.target.value)}}/>
          <br/>
          <button>create</button>
        </form>
  
        <ul>
          {lista.map((todo)=>
            <Todo key={todo.id} title={todo.title} description={todo.description}/>
          )}
        </ul>
      </div>
    )}
    else return <Redirect to="/login"/>
}

export default Main