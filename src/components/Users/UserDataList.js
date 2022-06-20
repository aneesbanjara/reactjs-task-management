import classes from './UserDataList.module.css'
import Card from "../UI/Card";

const UserDataList = props => {
  return(
    <Card className={classes.users}>
    <ul>
    {props.users.map((user) => {
      return (<li key={user.id}>{user.name} {user.uage} years old.</li>);
    })}
    </ul>
  </Card>

  );
}

export default UserDataList;