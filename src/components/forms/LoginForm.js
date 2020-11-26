import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';


const LoginForm = props => {

    const [username, setUsername] = useState('');

    const onLoginClicked = () => {
        props.clickLogin(username);
    }
    
    const onUsernameChange = event => setUsername(event.target.value);

    return (
        <Container>
        <Form>
            <div className="form-group row " >
                <div className="col-sm-2">
                    <label className=" col-form-label">Username: </label>
                </div>
                <div className="col-sm-7">
                    <input className="form-control" type="text" placeholder="Enter your username..." onChange={onUsernameChange}></input>
                </div>
                <div className="col-sm-1">
                    <button className="btn btn-light" type="button" onClick={onLoginClicked}>Login</button>
                </div>
            </div>
        </Form>
        </Container>
    )
}

export default LoginForm;
