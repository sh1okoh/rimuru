import { Room } from './features/room/Room';
import { Login } from './features/login/Login';
import { SignUp } from './features/signUp/SignUp';
import { Chat } from './features/chat/Chat';
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
            <Link to="/room">room</Link>
          </li>
          <li>
            <Link to="/chat">chat</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/sign_up">sign up</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/room">
          <Room />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/sign_up">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
