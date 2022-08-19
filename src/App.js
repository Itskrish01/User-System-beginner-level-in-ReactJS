import React, {useState} from 'react'
import UserForm from './components/UserForm'
import UserList from "./components/UsersList";

export default function App() {

  const [userInfo, setUserInfo] = useState([]);


  const addUserHandler = (uName, uAge) => {
    return (
      setUserInfo(preUserInfoList => {
        return [...preUserInfoList, {name: uName, age: uAge}]
      })
    )
  }

  return (
    <div className="App">
     <UserForm onAddUser={addUserHandler} />
     <UserList people={userInfo} />
    </div>
  );
}
