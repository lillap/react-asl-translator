import React from 'react';
import Redirect from '../redirect';
import { getStorage } from '../../utils/localstorage'
import TranslatorTable from '../ui/TranslatorTable';

// create some sort of link to translator-page

const Profile = () => {
    const user = getStorage('session');

    return (
        <div>
            {!user && <Redirect to="/login"/>}
            <h1>Profile</h1>
            <TranslatorTable/>
            <Redirect />
        </div>
       
    )
}

export default Profile;