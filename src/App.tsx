import React, {useState, useReducer} from 'react';
import InputField from './components/InputField';
import TodoList from './components/TodoList/TodoList';
// import TodoReducer from "./TodoStore"
import { Todo, Action_Types } from './model';
import TodoReducer from "./TodoStore"
import { Action_Done, Action_Remove, Action_Edit, Action_Add } from './model';
import './App.css';



// APP COMPONENT RESPONSIBLE FOR MANAGING ALL OUR STATE 
const App: React.FC = () => {
  // state = todos
  // Inital state is set to empty array 
  const [state, dispatch] = useReducer(TodoReducer, [])

    

  // ! useState implementation
  // const [todos, setTodos] = useState<Array<Todo>>([])

  // -------------- Create own Action Creators -----------------
  // An action creator returns an action and dispatch it to all reducers
  // takes payload as argument
  function Add_Todo(text: string){
    // This action will make the reducer to create a brand new Todo Item 
    const action: Action_Add = {type: Action_Types.ADD, payload: text}
    dispatch(action)
  }

  function Finish_Todo(id: string){
    const action: Action_Done = {type: Action_Types.DONE, payload: id}
    dispatch(action)
  }

  function Remove_Todo(id: string){
    const action: Action_Remove = {type: Action_Types.REMOVE, payload: id}
    dispatch(action)
  }

  function Edit_Todo(id: string, updatedText: string){
    const action: Action_Edit = {type: Action_Types.EDIT, payload: {id: id, text: updatedText}}
    dispatch(action)
  }
  return (
    <div className="App">
      <InputField  addTodo={Add_Todo}/>
      <TodoList todos={state}  editTodo={Edit_Todo} removeTodo={Remove_Todo} setDone={Finish_Todo}/>
    </div>
  );
}

export default App;
