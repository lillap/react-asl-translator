import React, { useState } from 'react';
import TranslatorForm from '../forms/TranslatorForm';
import { getStorage } from '../../utils/localstorage';
import { Redirect } from 'react-router-dom';
import TranslatorResult from '../ui/TranslatorResult';

const Translator = () => {
    const user = getStorage('session');
    const [currentTranslation, setCurrentTranslation] = useState('');

    const handleTranslationClick = (input) => {
        setCurrentTranslation(input);
    }
 
    return (
        <div>
            {!user && <Redirect to="/login"/>}
            <h1>Translator</h1>
            <TranslatorForm makeTranslation={event => handleTranslationClick(event)}/>
            <TranslatorResult input={currentTranslation} />
        </div>
    )
}
export default Translator;