import React, { useState } from 'react';

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
        <form>
            <div>
                <label>Translate: </label>
                <input type="text" placeholder="Enter your word to translate..."
                    onChange={onTranslatorChange} maxLength={40}/>
            </div>
            <div>
                <button type="button" disabled={inputError} onClick={onTranslateClick}>Translate!</button>
            </div>
            {inputError && <p>This form only accepts A-z</p>}
        </form> 
    )
}

export default TranslatorForm;