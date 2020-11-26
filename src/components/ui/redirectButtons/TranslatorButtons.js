import React from 'react';
import { useHistory } from 'react-router-dom';
import { clearStorage } from '../../../utils/localstorage';

const TranslatorButtons = () => {
    
    const history = useHistory();

    const logOut = () => { // Log out
        clearStorage();
        history.replace('/login');
    }

    const goToProfile = () => { // Go to profile-page
        history.replace('/profile');
    }

    return (
        
            <div>
                <button type="button" onClick={goToProfile}>Profile page</button>
                <button type="button" onClick={logOut}>Log out</button>
            </div>
        
    )
}

export default TranslatorButtons;