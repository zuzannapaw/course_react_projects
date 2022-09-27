import FormUserInputs from "./FormUserInputs";

function UsersInputs(props) {
  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };

    props.onAddUser(userData);
  };

  const saveEmptyInputs = (titleParam,messageParam) => {
    const title = titleParam;
    const message = messageParam;

    props.onAddEmptyInputs(title, message);
  };

  return (
    <FormUserInputs
      onSaveEmptyInputs={saveEmptyInputs}
      onSaveUserData={saveUserDataHandler}
    ></FormUserInputs>
  );
}

export default UsersInputs;
