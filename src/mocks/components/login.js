import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Login = () => {

    const { push } = useHistory();

    const [credentials, setcredentials] = useState({
        username: "",
        password: ""
    })

    const handleChange = (evt) => {
        setcredentials({
            ...credentials,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        axios.post('http://localhost:9000/api/login', credentials)
        .then(res => {
            window.localStorage.setItem("token", res.data.token);
            push('/friends');
        })
        .catch(err => {
            debugger
        })
    }
    
    return (
        <div id='wrapper'>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>USERNAME</label>
                    <input onChange={handleChange} name="username" id='username'/>
                </div>
                <div>
                    <label htmlFor='password'>PASSWORD</label>
                    <input onChange={handleChange} name="password" type="password" id='password'/>  
                </div>

                <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default Login