import React from 'react'
import {Todo} from "../../model"
import SingleTodo from './Todo/SingleTodo';
import "./TodoList.css"

interface Props {
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>
}

const TodoList: React.FunctionComponent<Props> = ({todos, setTodos}: Props) => {
    const renderTodos = todos.map((todoItem) => {
        return <SingleTodo todo={todoItem}  setTodos={setTodos} todos={todos} key={todoItem.id}/>
      })
  return (
    <div className="todos">{renderTodos}</div>
  )
}

export default TodoList