import UserItem from "./UserItem";
import "./UsersList.css";

const UsersList = (props) => {
  if (props.userItems.length === 0) {
    return <h2 className="">Found no users.</h2>;
  }

  return (
    <ul>
      {props.userItems.map((user) => (
        <UserItem key={user.id} username={user.username} age={user.age} />
      ))}
    </ul>
  );
};

export default UsersList;
