import './App.css';
import {useState} from 'react'
import Todo from './components/Todo';

function App() {

  const defaultList = [{
    title: "dar aula",
    description: "generica",
    id: 1
  },{
    title: "almoçar",
    description: "mó fome, tá doido?",
    id: 2
  }]

  const [numero, setNumero] = useState(0)
  const [lista, setLista] = useState(defaultList)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function add(){
    setNumero(numero+1) //numero += 1
  }

  function handleCreation(event){
    event.preventDefault()
    //const title = document.querySelector("#title")
    //const description = document.querySelector("#description")

    const nTodo={
      title: title,
      description: description,
      id: lista[lista.length-1].id+1
    }

    setLista([...lista, nTodo])
    setTitle("")
    setDescription("")
    //console.log(lista)
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <h1>{numero}</h1>
      <input type="button" value="add 1" onClick={add}/>
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
  );
}

export default App;