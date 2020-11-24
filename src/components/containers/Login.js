import React from 'react';
import LoginForm from '../forms/LoginForm';
import { setStorage } from '../../utils/localstorage';

const Login = () => {

    const handleLoginClicked = (username) => {
        setStorage('username', username);
    }

    return (
        <div>
            <h1>Log in</h1>
            <LoginForm clickLogin={event => handleLoginClicked(event)}/>
        </div>
    )
}

export default Login;