import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Login from './mocks/components/login';
import FriendsList from './mocks/components/friendslist';
import AddFriends from './mocks/components/addfriends';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/login">
          <Redirect to="/"/>
        </Route>
        <Route exact path="/friends">
          <FriendsList/>
        </Route>
        <Route exact path="/friends/add">
          <AddFriends/>
        </Route>
      </div> 
    </Router>

  );
}

export default App;
