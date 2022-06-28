import React, { useState, useEffect, useRef} from 'react'
import { Todo } from '../../../model';
import {AiFillEdit, AiFillDelete} from "react-icons/ai"
import {MdDone} from "react-icons/md"
import "./SingleTodo.css"


type Props = {
    todo: Todo; 
    todos: Array<Todo>
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>
    
}

const SingleTodo: React.FC<Props> = ({todo: todoItem, todos, setTodos}: Props) => {
  const [onEdit, setOnEdit] = useState<boolean>(false);
  const [editTodoText, setEditTodoText] = useState<string>(todoItem.todo)
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [onEdit])


  const handleDone = function(event: React.MouseEvent<SVGElement>, id: string): void {
    event.preventDefault();
    setTodos((prevTodos) => {
      return prevTodos.map((singleTodo) => 
        // GOOD CHOISE => map will iteratre through the array and the objects are 
        // a reference to the 
        singleTodo.id === id ? {...singleTodo, isDone: !singleTodo.isDone} : singleTodo
      )
    })
  }
  const handleDelete = function(event: React.MouseEvent<SVGElement>, id: string): void {
    setTodos((prevTodos) => {
      const newTodoList = prevTodos.filter((singleTodoItem) => singleTodoItem.id !== id)
      return newTodoList
    })
  }

  const handleToggleEditMode = function(event: React.MouseEvent<SVGElement>): void{
    if (!todoItem.isDone){
      // toggle behaviour 
      setOnEdit((prevMode) => !prevMode)
    }
  }

  const handleChange = function(event: React.ChangeEvent<HTMLInputElement>): void{
    setEditTodoText(event.target.value)
  }

  const handleSubmit = function(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    // save the changes of the edited todo 
    setTodos((prevTodos) => {
      return prevTodos.map((singlePrevTodo) => {
        // if editing todo = current todo - update its text and return it so else return wrong todo item 
        return singlePrevTodo.id === todoItem.id ? {...singlePrevTodo, todo: editTodoText}: singlePrevTodo
      })
    })
    setOnEdit(false)
  }

  const renderEditModeInputField =   <input ref={inputRef} value={editTodoText} className="todos__single--text" onChange={handleChange}></input>

  // s tag for strike through enclosed text  
  const renderSingleTodo = onEdit ? renderEditModeInputField : todoItem.isDone ? <s  className="todos__single--text">{todoItem.todo}</s> : (
    <span className="todos__single--text">{todoItem.todo}</span>
  )


  return (
    <form className='todos__single' onSubmit={handleSubmit}>
      {renderSingleTodo}
      <div>
        <span className="icon">
          <AiFillEdit onClick={handleToggleEditMode}/>
        </span>
        <span className="icon">
          <AiFillDelete onClick={(event) => {
            handleDelete(event, todoItem.id)
          }}/>
        </span>
        <span className="icon">
          <MdDone onClick={(event) => {
            handleDone(event, todoItem.id)
          }}/>
        </span>
      </div>
    </form>
  )
}

export default SingleTodo