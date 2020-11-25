import React from 'react';
import Redirect from '../redirect';
import TranslatorTable from '../ui/TranslatorTable';

// create some sort of link to translator-page

const Profile = () => {

    return (
        <div>
            <h1>Profile</h1>
            <TranslatorTable/>
            <Redirect />
        </div>
       
    )
}

export default Profile;