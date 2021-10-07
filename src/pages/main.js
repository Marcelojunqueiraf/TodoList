import axios from 'axios';
import {useEffect, useState} from 'react'
import Todo from '../components/Todo';

function Main(){
      const [lista, setLista] = useState([])
      const [title, setTitle] = useState("")
      const [description, setDescription] = useState("")
    

      // efeito colateral, coisa de fora
      // UseEffect
    
    //sincrono esperar todos os ingredientes chegarem
    //assincrono usar o que já tem enquanto espera o resto chegar


      useEffect(()=>{
        async function getTodos(){
            axios.get("http://198.74.50.215:3000/user/2/todos/")
            .then((resp)=>{
                setLista(resp.data)
            })
            .catch((err)=>{
                //redirecionar página
                console.log("ocorreu um erro" + err)
            })
        }
        getTodos()
      }, []//array de dependências
      )

      function handleCreation(event){
        event.preventDefault()

        const data ={
            title:title,
            description:description
        }

        async function createTodo(){
            axios.post("http://198.74.50.215:3000/user/2/todos/", data)
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

    return(
        <div className="App">
        <h1>Todo List</h1>
        
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
    )
}

export default Main