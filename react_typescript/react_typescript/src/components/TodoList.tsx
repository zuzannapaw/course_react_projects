import Todo from "../models/todo";

const TodoList: React.FC<{ items:Todo[]}> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
