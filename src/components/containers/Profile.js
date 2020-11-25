import React from 'react';
import { useHistory } from 'react-router-dom';
import { clearStorage } from '../../utils/localstorage';
import TranslatorTable from '../ui/TranslatorTable';

// create some sort of link to translator-page and a logout/clear localstorage-button

const Profile = () => {

    const history = useHistory();

    const logOut = () => {
        clearStorage();
        history.replace('/login');
    }

    return (
        <div>
            <h1>Profile</h1>
            <TranslatorTable/>
            <button type="button" onClick={logOut}> clear </button>
        </div>
       
    )
}

export default Profile;