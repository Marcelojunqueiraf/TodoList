import styled from "styled-components"

const Li = styled.li`
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 16px;
  margin-bottom: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  background: white;
  list-style-type: none;
`

function Todo({title, description}){
    return(
      <Li className="todo">
        <span>{title}</span>
        <p>{description}</p>
        <input type="checkbox"/>
      </Li>
    )
  }

export default Todo