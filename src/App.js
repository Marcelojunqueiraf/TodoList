import './App.css';
import Main from './pages/main';
import Profile from './pages/profile';
import Login from './pages/login';
import Register from './pages/register';

import UserContext from './Contexts/context';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Redirect } from 'react-router';

import { createContext, useState } from 'react';
import Exemplo from './pages/exemplo';

function App() {

  const [user,setUser] = useState(null)

  return (
    <UserContext.Provider value={{user, setUser}}>    
      <Router>
        <Switch>
          <Route path="/profile">
            {user? 
              <Profile/>
              : 
              <Redirect to="/login"/>}
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/">
            {user? 
              <Main/>
              : 
              <Redirect to="/login"/>}
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;