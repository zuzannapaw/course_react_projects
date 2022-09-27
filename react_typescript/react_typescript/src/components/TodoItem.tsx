import { Fragment } from "react";
import classes from "./TodoItem.module.css";



const TodoItem: React.FC<{ text: string; id: string; onRemoveTodo:(id:string) => void }> = (
  props
) => {
  const removeTodoHandler = () => {
    props.onRemoveTodo(props.id);
  };

  return (
    <Fragment>
      <li className={classes.item}>{props.text}</li>
      <button onClick={removeTodoHandler}>Remove Todo</button>
    </Fragment>
  );
};

export default TodoItem;
