import React, { useState } from 'react';

const TranslatorForm = props => {

    const [translation, setTranslation] = useState('');
    const [inputError, setInputError] = useState(false);
    
    const onTranslateClick = () => {
        if (!inputError) {
            props.makeTranslation(translation);
        } else console.log("not sending");
    }

    // validate if allowed characters and if allowed length
    const onTranslatorChange = event => {
        let value = event.target.value;

        if(!value.match(/^[A-Za-z ]+$/)) {
            setInputError(true);
        } else {
            setInputError(false);
            value = value.replace(/\s+/g, '_').toLowerCase();
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