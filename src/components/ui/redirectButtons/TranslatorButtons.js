import React from 'react';
import { useHistory } from 'react-router-dom';
import { clearStorage} from '../../../utils/localstorage';

const TranslatorButtons = () => {
    

    const history = useHistory();

    const logOut = () => {
        clearStorage();
        history.replace('/login');
    }

    const goToProfile = () => {
        history.replace('/profile');
    }

    return (
        
            <div>
                <button type="button" onClick={logOut}>Log out.</button>
                <button type="button" onClick={goToProfile}>Profile page</button>
            </div>
        
    )
}

export default TranslatorButtons;