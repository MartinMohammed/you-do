import React, {useState, useRef} from 'react'
import "./InputField.css"

// --------------- TWO WAYS TO DEFINE THE INCOMING PROPS ---------------
// * Second Way to define the incoming props => better approach - legibility 
interface Props {
    // todo: string; 
    // useState type 
    // setTodo: React.Dispatch<React.SetStateAction<string>>; 
    // handleAdd: (event: React.FormEvent) => void;
    addTodo: (text: string) => void; 
}

// * One way to define the incoming props
const InputField: React.FC<Props> = ({addTodo}: Props
    /* {todo, setTodo }: {todo: string, setTodo: Function} */) => {

      // Generic Type <string | number | Array<string>>
    const [inputText, setInputText] = useState<string>("");
    // so useRef knows that it will hold an HTMLInputElement
    const inputRef = useRef<HTMLInputElement>(null); // useRef similar to document.getElementById or Classname
                        // direct reference to the particular jsx element htmls content in the dom 


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setInputText(e.target.value)
  }


  // The result of the submitted form should be called with this function 
  // and this function should append the new todo into the todos array 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // it shifts the blur from the input box
    // inputRef.current?.blur()
    inputRef.current?.blur();
    addTodo(inputText);
  }

  return (
    <form className="input" onSubmit={handleSubmit}>
        <input ref={inputRef} type="input" placeholder="Enter a task" className="input__box" value={inputText} onChange={handleChange}/>
        <button className="input__submit" type='submit'>Go</button>
    </form>
  )
}

export default InputField