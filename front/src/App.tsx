import { Room } from './features/room/Room';
import { Login } from './features/login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chat">room</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/chat">
          <Room />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
