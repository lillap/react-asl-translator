import React, { useState } from 'react';
import TranslatorForm from '../forms/TranslatorForm';
import { getStorage } from '../../utils/localstorage';
import { Redirect, useHistory } from 'react-router-dom';
import TranslatorResult from '../ui/TranslatorResult';

const Translator = () => {
    const user = getStorage('session');
    const history = useHistory();
    const [currentTranslation, setCurrentTranslation] = useState('');

    const handleTranslationClick = (input) => {
        setCurrentTranslation(input);
    }

    const goToProfile = () => {
        history.replace('/profile');
    }

    // create some sort of redirect to profile-page
 
    return (
        <div>
            {!user && <Redirect to="/login"/>}
            <h1>Translator</h1> 
            <button type="button" id="profile-btn" onClick={goToProfile}>Profile page</button>
            <TranslatorForm makeTranslation={event => handleTranslationClick(event)}/>
            <TranslatorResult input={currentTranslation} />
        </div>
    )
}
export default Translator;