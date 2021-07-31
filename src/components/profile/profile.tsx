import React from 'react';
import profileImg from './user-img.png';
import './profile.scss';

function Profile() {

    const name = 'Shir Milan';
    const title = 'Front-End Developer';

    return (
        <div className="profileContainer">
            <img src={profileImg} alt="" />
            <div className="user-details-container">
                <span className="userName">{name.toUpperCase()}</span>
                <span className="userTitle">{title}</span>
            </div>
        </div>
    )
}

export default Profile;
