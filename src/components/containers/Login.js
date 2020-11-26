import React from 'react';
import LoginForm from '../forms/LoginForm';
import { getStorage, setStorage } from '../../utils/localstorage';
import { Redirect, useHistory } from 'react-router-dom';

const Login = () => {

    const user = getStorage('session');
    const history = useHistory();

    const handleLoginClicked = (username) => { // add user to current session and redirect to translator-page
        setStorage('session', username); 
        history.replace('/translator');
    };

    return (
        <div>
            {user && <Redirect to="/translator"/>}
            <h3>Login</h3>
            <LoginForm clickLogin={event => handleLoginClicked(event)}/>
        </div>
    )
}

export default Login;