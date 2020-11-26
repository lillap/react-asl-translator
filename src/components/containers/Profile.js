import React from 'react';
import { Redirect } from 'react-router-dom';
import { getStorage } from '../../utils/localstorage'
import ProfileButtons from '../ui/buttons/ProfileButtons';
import TranslatorTable from '../ui/translatorTable/TranslatorTable';

const Profile = () => { // redirects to login-page if no user is found in session
    const user = getStorage('session');

    return (
        <div>
            <ProfileButtons/>
            {!user && <Redirect to="/login"/>}
            <h3 className="m-4">Welcome {user}</h3>
            <TranslatorTable/>
        </div>
       
    )
}

export default Profile;