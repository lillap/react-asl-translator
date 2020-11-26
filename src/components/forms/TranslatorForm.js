import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

const TranslatorForm = props => {

    const [translation, setTranslation] = useState(''); // current input
    const [inputError, setInputError] = useState(false); // validation of current input
    
    const onTranslateClick = () => {
        if (!inputError) {
            props.makeTranslation(translation);
        } else console.log("not sending");
    }

    
    const onTranslatorChange = event => { // validate if input contains only allowed characters
        let value = event.target.value;

        if(!value.match(/^[A-Za-z ]+$/)) { // accept only letters and spaces
            setInputError(true);
        } else {
            setInputError(false);
            value = value.replace(/\s+/g, '_').toLowerCase(); // spaces are being replaced with underscores
            setTranslation(value);
        }
    }; 
    
    return (
        <Container>
        <Form>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Translate: </label>
                <div className="col-sm-8">
                    <input className="form-control" type="text" placeholder="Enter a word or sentence..."
                        onChange={onTranslatorChange} maxLength={40}/>
                </div>
            </div>
            <div className="text-center">
                <button className="btn btn-lg btn-light" type="button" disabled={inputError} onClick={onTranslateClick}>Translate!</button>
            </div>
            {inputError && <p>This form only accepts A-z</p>}
        </Form> 
        </Container>
    )
}

export default TranslatorForm;