import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/counter/userSlice';
import { auth } from '../../firebase';
import Nav from '../Nav/Nav';
import './ProfilePage.css'

function ProfilePage() {

    const user = useSelector(selectUser)

    return (
        <div className='profilePage'>
            <Nav />
            <div className='profilePage__body'>
                <h1>Edit Profile</h1>
                <div className='profilePage__info'>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="Profile Avatar"
                    />
                    <div className='profilePage__details'>
                        <h2>{user.email}</h2>
                        <div className='profilePage__plans'>
                            <h3>Plans</h3>
                            <button
                                className='profilePage__signOut'
                                onClick={() => auth.signOut()}
                            >Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage