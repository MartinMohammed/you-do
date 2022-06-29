import { Actions, Action_Types, Todo } from "./model";

const TodoReducer = (prevState: Todo[], action: Actions): Array<Todo> => {
  switch (action.type) {
    case Action_Types.ADD:
      return [
        ...prevState,
        { id: Date.now().toString(), todo: action.payload, isDone: false },
      ];
    case Action_Types.REMOVE:
      return prevState.filter(
        (singleTodoItem) => singleTodoItem.id !== action.payload
      );

    case Action_Types.DONE:
      return prevState.map((singleTodoItem) => {
        return singleTodoItem.id === action.payload
          ? { ...singleTodoItem, isDone: !singleTodoItem.isDone }
          : singleTodoItem;
      });
    case Action_Types.EDIT:
      const { text, id } = action.payload;
      const updatedState = prevState.map((singleTodoItem) => {
        return singleTodoItem.id === id
          ? { ...singleTodoItem, todo: text }
          : singleTodoItem;
      });
      return updatedState;
    default:
      return prevState;
  }
};

export default TodoReducer;
