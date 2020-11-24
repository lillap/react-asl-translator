import React from 'react';

const TranslatorForm = props => {
    
    const onTranslateClick = () => {}
    
    return (
        <form>
            <div>
                <label>Translate: </label>
                <input type="text" placeholder="Enter your word to translate..."/>
            </div>
            <div>
                <button type="button" onClick={onTranslateClick}>Translate!</button>
            </div>
        </form>
    )
}

export default TranslatorForm;