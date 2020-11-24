import React from 'react';

const LoginForm = props => {
    return (
        <form>
            <div>
                <label>Username:</label>
                <input type="text" placeholder="Enter your username..."></input>
            </div>
            <div>
                <button type="button">Log in</button>
            </div>
        </form>
    )
}

export default LoginForm;