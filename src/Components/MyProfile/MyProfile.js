import React from 'react';
import MyProfilePresentational from './MyProfilePresentational';
import MainSection from '../MainSection/MainSection';

const pageTitle = "Mój profil";

function MyProfile(props) {

    return(<div>
        <MyProfilePresentational />
    </div>);
}

export default MainSection(MyProfile, pageTitle);