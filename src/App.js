import './App.css';
import Main from './pages/main';
import Profile from './pages/profile';
import Login from './pages/login';
import Register from './pages/register';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/">
          <Main/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;