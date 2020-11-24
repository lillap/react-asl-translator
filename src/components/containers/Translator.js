import React from 'react';
import TranslatorForm from '../forms/TranslatorForm';
import { setStorage, getStorage } from '../../utils/localstorage';
import { Redirect } from 'react-router-dom';
import TranslatorResult from '../ui/TranslatorResult';

const Translator = () => {
    const user = getStorage('session');

    const handleTranslationClick = (input) => {
        setStorage('currentTranslation', input);
    }
 
    return (
        <div>
            {!user && <Redirect to="/login"/>}
            <h1>Translator</h1>
            <TranslatorForm makeTranslation={event => handleTranslationClick(event)}/>
            <TranslatorResult />
        </div>
    )
}
 // Render translatorresult on update?
export default Translator;