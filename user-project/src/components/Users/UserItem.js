import "./UsersList.css";

function UserItem(props) {
  return (
    <li>
      {props.username}, {props.age}
    </li>
  );
}

export default UserItem;
