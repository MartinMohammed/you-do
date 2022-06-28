import React, {useRef} from 'react'
import "./InputField.css"

// --------------- TWO WAYS TO DEFINE THE INCOMING PROPS ---------------
// * Second Way to define the incoming props => better approach - legibility 
interface Props {
    todo: string; 
    // useState type 
    setTodo: React.Dispatch<React.SetStateAction<string>>; 
    handleAdd: (event: React.FormEvent) => void;
}

// * One way to define the incoming props
const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}: Props
    /* {todo, setTodo }: {todo: string, setTodo: Function} */) => {

    // so useRef knows that it will hold an HTMLInputElement
    const inputRef = useRef<HTMLInputElement>(null); // useRef similar to document.getElementById or Classname
                        // direct reference to the particular jsx element htmls content in the dom 


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setTodo(e.target.value)
}

  return (
    <form className="input" onSubmit={(e) => {
        handleAdd(e)
        // it shifts the blur from the input box
        // inputRef.current?.blur()
        inputRef.current?.blur();
    }}>
        <input ref={inputRef} type="input" placeholder="Enter a task" className="input__box" value={todo} onChange={handleChange}/>
        <button className="input__submit" type='submit'>Go</button>
    </form>
  )
}

export default InputField