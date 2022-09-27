import "./FormUserInputs.css";
import { useState,useRef } from "react";
import Card from "../UI/Card";

function FormUserInputs(props) {
  // const [userName, setUserName] = useState("");
  // const [userAge, setUserAge] = useState("");
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const addUserNameHandler = (e) => {
  //   setUserName(e.target.value);
  // };

  // const addUserAgeHandler = (e) => {
  //   setUserAge(e.target.value);
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value

    if (!enteredName || !enteredAge) {
      const title = "Invalid input"
      const message = "Please, enter name and age"
      props.onSaveEmptyInputs(title,message);
      return
    }

    if (Number(enteredAge) < 1) {
      const title = "Invalid age"
      const message = "User's age must be bigger or equal 1"
      props.onSaveEmptyInputs(title,message)
      return
    };

    const userData = {
      username: enteredName,
      age: enteredAge,
    };

    props.onSaveUserData(userData);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    
  };

  return (
    <Card className={"form"}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input ref={nameInputRef}></input>
        <label htmlFor="age">User age</label>
        <input  ref={ageInputRef}></input>
        <button type="submit"> Add User</button>
      </form>
    </Card>
  );
}

export default FormUserInputs;

//className='form'
