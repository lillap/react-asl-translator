import React from 'react';
import TranslatorForm from '../forms/TranslatorForm';
import { setStorage, getStorage } from '../../utils/localstorage';
import { Redirect } from 'react-router-dom';

const Translator = () => {
    const user = getStorage('session');
    const translations = getStorage('translations') || [];

    const handleTranslationClick = (input) => {
        // translate(input)  
        saveTranslation(input);
    }

    const saveTranslation = (input) => {
        if (translations.length >= 10) {
            translations.shift();
            translations.push(input);
        } else {
            translations.push(input);
        }
        
        setStorage('translations', translations);
    }
 
    return (
        <div>
            {!user && <Redirect to="/login"/>}
            <h1>Translator</h1>
            <TranslatorForm makeTranslation={event => handleTranslationClick(event)}/>
        </div>
      
    )
}

export default Translator;