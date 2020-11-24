import React, { useState } from 'react';

const TranslatorForm = props => {

    const [translation, setTranslation] = useState('');
    
    const onTranslateClick = () => {
        props.makeTranslation(translation);
    }

    const onTranslatorChange = event => setTranslation(event.target.value);
    
    return (
        <form>
            <div>
                <label>Translate: </label>
                <input type="text" placeholder="Enter your word to translate..." onChange={onTranslatorChange}/>
            </div>
            <div>
                <button type="button" onClick={onTranslateClick}>Translate!</button>
            </div>
        </form>
    )
}

export default TranslatorForm;