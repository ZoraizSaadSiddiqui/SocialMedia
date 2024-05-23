import React, { useState } from 'react';

const Profile = ({ isDarkMode }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleBioChange = (e) => {
        setBio(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to submit profile changes to the server
        console.log('Profile changes submitted:', { username, email, bio });
    };

    return (
        <div className="container" style={{ 
            maxWidth: '500px',
            backgroundColor: isDarkMode ? '#333' : '#fff',
            color: isDarkMode ? '#fff' : '#333',
         }}>
            <div className="card shadow border-0 rounded-lg mt-3">
                <div className="card-header"><h3 className="text-center font-weight-light my-3">Profile</h3></div>
                <div className="card-body p-3">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="usernameInput" className="small mb-1">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="usernameInput"
                                value={username}
                                onChange={handleUsernameChange}
                                style={{ backgroundColor: isDarkMode ? '#444' : '#f8f9fa', color: isDarkMode ? '#fff' : '#333' }}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="emailInput" className="small mb-1">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="emailInput"
                                value={email}
                                onChange={handleEmailChange}
                                style={{ backgroundColor: isDarkMode ? '#444' : '#f8f9fa', color: isDarkMode ? '#fff' : '#333' }}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="bioInput" className="small mb-1">Bio</label>
                            <textarea
                                className="form-control"
                                id="bioInput"
                                rows="3"
                                value={bio}
                                onChange={handleBioChange}
                                style={{ backgroundColor: isDarkMode ? '#444' : '#f8f9fa', color: isDarkMode ? '#fff' : '#333' }}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-secondary">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
