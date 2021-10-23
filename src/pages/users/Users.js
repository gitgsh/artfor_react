import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import List from "./List";
import Write from "./Write";
import Detail from "./Detail";

function Users() {
  return (
    <div>
      <div>Users</div>
      <div><NavLink to="/users/list">List</NavLink></div>
      <div><NavLink to="/users/write">Write</NavLink></div>
      <div><NavLink to="/users/detail/1">Detail</NavLink></div>
      <Switch>
        <Route path="/users/list" component={List} />
        <Route path="/users/write" component={Write} />
        <Route path="/users/detail/:key" component={Detail} />
        <Redirect to={{pathname: "/users/list"}} />
      </Switch>
    </div>
  )
}

export default Users;