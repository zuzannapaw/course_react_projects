
import './App.css';
import {useState} from 'react'
import Users from './components/Users/Users';
import UsersInputs from './components/UsersInputs/UsersInputs'
import ErrorModal from './components/UI/ErrorModal';

function App() {
  const [users,setUsers] = useState([{username:'Bilbo', age: '31', id:'u1'},{username:'Remy', age: '23',id:'u2'}]);
  const [emptyInputs,setEmptyInputs] = useState(false)
  const [titleError,setTitleError] = useState('');
  const[messageError,setMessageError] = useState('');

const addUserHandler = user =>{
  setEmptyInputs(false)
  setUsers(prevUsers=>{
    return [user, ...prevUsers]
  });
}

const addEmptyInputs =(titleParam,messageParam)=>{
  setEmptyInputs(true)
   setTitleError(titleParam);
  setMessageError(messageParam);
  // console.log(` Values :${titleError} : ${messageError}`)
} 


const acceptError=()=>{
  setEmptyInputs(false)
}

  return (
    <div className="App">
      <header className = "App-header">
        {emptyInputs && <ErrorModal title ={titleError} message={messageError} onAcceptError={acceptError}/>}
      <UsersInputs onAddEmptyInputs = {addEmptyInputs} onAddUser = {addUserHandler}></UsersInputs>
      <Users items = {users}></Users>
      </header>
    </div>
  );
}

export default App;

//onChange ={changeInputs} onAddUser={addUserHandler}

