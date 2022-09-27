import React,{useContext} from "react";
// import TodoList from "./TodoList";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css'



const Todos: React.FC = () => {

const todoCtx = useContext(TodosContext)

  return (
    // <TodoList items={props.items}></TodoList>
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem onRemoveTodo={todoCtx.removeTodo} key={item.id} id={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;

//i inform that this function behaves as function component (FC) and it will get props children
//even if we dont know the type of it and besides it has my own props
//that are defined in <{}>. This is a generic function.

//classes can be a type name as well. I want an array that is full of Todos. Depend of what type are Todos.
