import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Link, useHistory } from 'react-router-dom';
import Login from './mocks/components/login';
import FriendsList from './mocks/components/friendslist';
import AddFriends from './mocks/components/addfriends';
import axios from 'axios';

function App() {

  const[ friends, setFriends ] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
  });

  const { push } = useHistory();

  const token = window.localStorage.getItem("token")

    useEffect(() => {
        axios.get('http://localhost:9000/api/friends', { 
          headers: { 
            authorization: token } 
        })
        .then(resp => {
          setFriends(resp.data)
        })
        .catch(err => {
          console.log(err)
        })
  }, [])

  const handleChange = (evt) => {
    setForm({
      ...form,
      [evt.target.name] : evt.target.value
    })
  }

  const handleSubmit = () => {
    axios.post('http://localhost:9000/api/friends', form, {headers: {authorization: token}})
    .then(resp => {
      debugger
      push('/friends')
    })
    .catch(err => {
      debugger
    })
  }

  return (
    <Router>
      <div className="App">
        <header id='header'>
          <h2>FRIENDS DATABASE</h2>
          <Link className="links" to="login">LOGIN.</Link>
          <Link className="links" to="friends">FRIENDLIST.</Link>
          <Link className="links" to="friends/add">ADDFRIEND.</Link>
          <Link className="links" to="logout">LOGOUT</Link>
        </header>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/login">
          <Redirect to="/"/>
        </Route>
        <Route exact path="/friends">
          <FriendsList friends={friends}/>
        </Route>
        <Route exact path="/friends/add">
          <AddFriends form={form} handleSubmit={handleSubmit} handleChange={handleChange}/>
        </Route>
      </div> 
    </Router>

  );
}

export default App;

/**
* [ ] Build out a simple component allowing you to logout of your application cleanly.
* [ ] The component should make a call to the logout endpoint and remove the token on local storage by default.
* [ ] In `App.js`, add a route to allow this component to be displayed when navigating to `/logout`.
* [ ] In `App.js`, create a navigation bar that allows the user to redirect to logout, friendslist or add friend.
 */

/**
 #### Protect the /friends and /friends/add routes
* [ ] Redirect the user to your login route if there is not a token in local storage.
const getArticles = () => {
    axiosWithAuth().get(articlesUrl)
      .then(res => {
        setArticles(res.data.articles)
      })
      .catch(err => {
        if (err.response.status == 401) {
          navigate('/')
        } else {
          debugger
        }
      })
  }
 */