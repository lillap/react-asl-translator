import React, { useState } from 'react';


const LoginForm = props => {

    const [username, setUsername] = useState('');

    const onLoginClicked = () => {
        props.clickLogin(username);
    } // pass the username-variable to the parent using props
    
    const onUsernameChange = event => setUsername(event.target.value); // set state-variable to the value contained in the input-field

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