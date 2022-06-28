import React, {useState} from 'react';
import InputField from './components/InputField';
import TodoList from './components/TodoList/TodoList';
import { Todo } from './model';
import './App.css';



const App: React.FC = () => {
  // Generic Type <string | number | Array<string>>
const [todo , setTodo] = useState<string>(""); 
const [todos, setTodos] = useState<Array<Todo>>([])

// The result of the submitted form should be called with this function 
// and this function should append the new todo inot the todos array 
const handleAdd = (e: React.FormEvent) => {
  e.preventDefault();

  if(todo){
    const newTodo: Todo = {todo: todo, id: Date.now().toString(), isDone: false}
    setTodos([...todos, newTodo])
    setTodo("") // empty the input field 
  }
}

  return (
    <div className="App">
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
