import React from 'react';
import { useHistory } from 'react-router-dom';
import { clearStorage } from '../../../utils/localstorage';

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
        
            <div className="text-right">
                <button className="btn btn-sm btn-info mr-3" type="button" onClick={goBack}>Back to translation page</button>
                <button className="btn btn-sm btn-info mr-5" type="button" onClick={logOut}>Log out</button>
            </div>
        
    )
}

export default ProfileButtons;