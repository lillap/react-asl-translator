import React from 'react';
import {Redirect} from 'react-router-dom';
import { getStorage } from '../../utils/localstorage'
import ProfileButtons from '../ui/redirectButtons/ProfileButtons';
import TranslatorTable from '../ui/TranslatorTable';

// create some sort of link to translator-page

const Profile = () => {
    const user = getStorage('session');

    return (
        <div>
            <ProfileButtons/>
            {!user && <Redirect to="/login"/>}
            <h1>{user}</h1>
            <TranslatorTable/>
        </div>
       
    )
}

export default Profile;