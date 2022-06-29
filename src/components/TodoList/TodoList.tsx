import React from 'react'
import {Todo} from "../../model"
import SingleTodo from './Todo/SingleTodo';
import "./TodoList.css"

interface Props {
  todos: Array<Todo>;
  // setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>
    setDone: (id: string) => void;
    removeTodo: (id: string) => void; 
    editTodo: (id: string, text: string) => void;
}

const TodoList: React.FunctionComponent<Props> = ({todos, setDone, removeTodo, editTodo}: Props) => {
    const renderTodos = todos.map((todoItem) => {
        return <SingleTodo todo={todoItem} editTodo={editTodo} setDone={setDone} removeTodo={removeTodo}  key={todoItem.id}/>
      })
  return (
    <div className="todos">{renderTodos}</div>
  )
}

export default TodoList