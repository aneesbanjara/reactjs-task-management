import { useState } from "react";
import UserDataForm from "./components/Users/UserDataForm";
import UserDataList from "./components/Users/UserDataList";

function App() {
  const [userData, setUserData] = useState([]);

  const userDataHandler = (username, userage) => {
    console.log(username, userage)
    setUserData((prevUserData) => {
      return [...prevUserData, { name: username, uage: userage, id: Math.random().toString()}];
    })
    console.log(userData);
  }
  return (
    <div>
    <UserDataForm onUserData={userDataHandler} />
    <UserDataList users={userData}/>
    </div>
  );
}

export default App;
