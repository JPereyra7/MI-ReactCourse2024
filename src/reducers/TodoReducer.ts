import { Todo } from "../models/Todo";

//Reducers 
export enum ActionType {
    ADDED,
    REMOVED,
    TOGGLED,
}

export interface IAction {
    type: ActionType;
    payload: string;
}

export const TodoReducer = (todos: Todo[], action: IAction): Todo[] => {
    switch (action.type) {
        case ActionType.ADDED:
            return [...todos, new Todo(action.payload)]

            case ActionType.REMOVED:
                return todos.filter((todo) => todo.id !== +action.payload)

                case ActionType.TOGGLED:
                    return todos.map((todo) => {
                        if (todo.id !== +action.payload) return { ...todo, done: !todo.done }
                        return todo;
                    })
                    default:
                        return todos;
    }
}