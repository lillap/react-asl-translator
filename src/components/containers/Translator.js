import React, { useState } from 'react';
import TranslatorForm from '../forms/TranslatorForm';
import { getStorage } from '../../utils/localstorage';
import { Redirect } from 'react-router-dom';
import TranslatorResult from '../ui/TranslatorResult';
import TranslatorButtons from '../ui/buttons/TranslatorButtons';

const Translator = () => { // redirects to login-page if no user is found in session
    const user = getStorage('session');
    const [currentTranslation, setCurrentTranslation] = useState(''); // create state-variable for the current translation

    const handleTranslationClick = (input) => { // handle the current translation
        setCurrentTranslation(input);
    }

    return (
        <div>
            <TranslatorButtons/>
            {!user && <Redirect to="/login"/>}
            <h3>Translator</h3> 
            <TranslatorForm makeTranslation={event => handleTranslationClick(event)}/>
            <TranslatorResult input={currentTranslation} />
        </div>
    )
}
export default Translator;