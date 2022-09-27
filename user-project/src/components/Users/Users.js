import UsersList from "./UsersList";
import Card from "../UI/Card";

function Users(props) {
  return (
    <Card className="users">
      <UsersList userItems={props.items}></UsersList>
    </Card>
  );
}

export default Users;
