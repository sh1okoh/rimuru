import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";

import { Chat } from './features/chat/Chat';
import { Login } from './features/login/Login';
import { Room } from './features/room/Room';
import { SignUp } from './features/signUp/SignUp';

function App(): JSX.Element {
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
