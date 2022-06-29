//  Must be exported in order to be used
export interface Todo {
  id: string;
  todo: string;
  isDone: boolean;
}

// * ALTERNATIVE DOING ACTION TYPES WITH ENUM
// Enum with all the types of actions to use in our reducer;
export enum Action_Types {
  ADD = "add",
  REMOVE = "remove",
  DONE = "done",
  EDIT = "edit",
}

export type Action_Add = {
  type: Action_Types.ADD;
  payload: string;
};

export type Action_Remove = {
  type: Action_Types.REMOVE;
  // payload = id of the todo
  payload: string;
};

export type Action_Done = {
  type: Action_Types.DONE;
  payload: string;
};

export type Action_Edit = {
  type: Action_Types.EDIT;
  payload: {
    id: string;
    text: string;
  };
};

// Different allowed kind of actions for the reducer
export type Actions = Action_Add | Action_Remove | Action_Done | Action_Edit;
