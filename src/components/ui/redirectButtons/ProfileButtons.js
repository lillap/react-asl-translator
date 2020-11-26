import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { clearStorage, getStorage } from '../../../utils/localstorage';

const ProfileButtons = () => {
    

    const history = useHistory();

    const logOut = () => {
        clearStorage();
        history.replace('/login');
    }

    const goBack = () => {
        history.replace('/translator');
    }

    return (
        
            <div>
                <button type="button" onClick={goBack}>Back to translation page</button>
                <button type="button" onClick={logOut}>Log out</button>
            </div>
        
    )
}

export default ProfileButtons;