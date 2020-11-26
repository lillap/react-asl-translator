import React from 'react';
import { useHistory } from 'react-router-dom';
import { clearStorage } from '../../../utils/localstorage';

const ProfileButtons = () => {
    
    const history = useHistory();

    const logOut = () => { // Log out
        clearStorage();
        history.replace('/login');
    }

    const goToTranslator = () => { // Go to translator-page
        history.replace('/translator');
    }

    return (
        
            <div>
                <button type="button" onClick={goToTranslator}>Translation page</button>
                <button type="button" onClick={logOut}>Log out</button>
            </div>
        
    )
}

export default ProfileButtons;