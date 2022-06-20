import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import inputClasses from './UserDataForm.module.css'
import ErrorModel from "../UI/ErrorModel";

const UserDataForm = (props) => {
  const [usernameInput, setUsernameInput] = useState('');
  const [userAgeInput, setUserAgeInput] = useState('');
  const [error, setError] = useState();

  const userDataSubmitHandler = (event) => {
    event.preventDefault()
    if (usernameInput.trim().length <= 0 && userAgeInput.trim().length <= 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      })
      return;
    }
    if (+userAgeInput <= 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      })
      return;
    }
    props.onUserData(usernameInput, userAgeInput)
    setUsernameInput('')
    setUserAgeInput('')
  }
  const usernameChangeHandler = (event) => {
    setUsernameInput(event.target.value)
  }
  const userAgeChangeHandler = (event) => {
    setUserAgeInput(event.target.value)
  }
  const errorHandlar = () => {
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandlar}/>}
      <Card className={inputClasses.input}>
        <form onSubmit={userDataSubmitHandler}>
          <label htmlFor="username">Username:</label>
          <input type="text" value={usernameInput} onChange={usernameChangeHandler}/>
          <label htmlFor="Age">Age(years):</label>
          <input type="number" value={userAgeInput} onChange={userAgeChangeHandler}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default UserDataForm