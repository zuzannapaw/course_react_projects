import React, { useState } from "react";

import Todo from "../models/todo"


type Props={
    children:React.ReactNode
}

type TodosContextObj = { items: Todo[];
    addTodo: (text:string)=>void;
    removeTodo: (id:string)=>void}

export const TodosContext = React.createContext<TodosContextObj>({
    items:[],
    addTodo: (text: string)=>{},
    removeTodo: (id:string)=>{}
});


const TodosContextProvider:React.FC<Props>=({children})=>{

    const [todos, setTodos] = useState<Todo[]>([]);

    //useState<Todo[]> = data managed by state will be array full of Todos. if we add smth to that array it has to be Todo items

    const addTodoHandler = (todoText: string) => {
      const newTodo = new Todo(todoText);
  
      setTodos((prevState) => {
        return prevState.concat(newTodo);
        //it will used by a new state. this is a new array, not mutate existing array
      });
    };
    //here it has to have the same shape as in the component that we use this function ,same params types etc
  
    const removeTodoHandler = (todoId: string)=>{
      setTodos((prevState)=>{
        return prevState.filter((todo)=>todo.id !== todoId)
      })
    }
  

    const contextValue: TodosContextObj = {
        items:todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }

    return (<TodosContext.Provider value ={contextValue}>
        {children}
    </TodosContext.Provider>)
}

export default TodosContextProvider