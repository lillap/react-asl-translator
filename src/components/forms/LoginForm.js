import React, { useState } from 'react';


const LoginForm = props => {

    const [username, setUsername] = useState('');

    const onLoginClicked = () => {
        props.clickLogin(username);
    }
    
    const onUsernameChange = event => setUsername(event.target.value);

    return (
        <form>
            <div>
                <label>Username: </label>
                <input type="text" placeholder="Enter your username..." onChange={onUsernameChange}></input>
            </div>
            <div>
                <button type="button" onClick={onLoginClicked}>Log in</button>
            </div>
        </form>
    )
}

export default LoginForm;