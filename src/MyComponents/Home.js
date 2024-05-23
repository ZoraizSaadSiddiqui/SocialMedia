import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCalendarAlt, faCog } from '@fortawesome/free-solid-svg-icons'; // Change the imported icon

const Home = ({ isDarkMode }) => {
    return (
        <div className="container-fluid" style={{ backgroundColor: isDarkMode ? '#333' : '#f8f9fa', minHeight: '100vh', color: isDarkMode ? '#fff' : '#333' }}>
            <div className="row justify-content-center pt-5">
                <div className="col-md-6">
                    <h1 className="text-center mb-4" style={{ color: isDarkMode ? '#fff' : '#4B0150' }}>Welcome to the Social Media Dashboard</h1>
                    <p className="lead text-center">
                        Manage your social media accounts, schedule posts, and Settings all in one place.
                    </p>
                    <div className="card-group mt-5">
                        <div className="card text-center" style={{ backgroundColor: isDarkMode ? '#444' : '#fff', color: isDarkMode ? '#fff' : '#333' }}>
                            <div className="card-body">
                                <FontAwesomeIcon icon={faUsers} className="display-4 mb-3" style={{ color: isDarkMode ? '#fff' : '#4B0150' }}/>
                                <h5 className="card-title" style={{ color: isDarkMode ? '#fff' : '#4B0150' }}>Manage Accounts</h5>
                                <p className="card-text" style={{ color: isDarkMode ? '#fff' : '#4B0150' }}>Easily manage your social media accounts from one dashboard.</p>
                            </div>
                        </div>
                        <div className="card text-center" style={{ backgroundColor: isDarkMode ? '#444' : '#fff', color: isDarkMode ? '#fff' : '#333' }}>
                            <div className="card-body">
                                <FontAwesomeIcon icon={faCalendarAlt} className="display-4 mb-3" style={{ color: isDarkMode ? '#fff' : '#4B0150' }} />
                                <h5 className="card-title" style={{ color: isDarkMode ? '#fff' : '#4B0150' }}>Schedule Posts</h5>
                                <p className="card-text" style={{ color: isDarkMode ? '#fff' : '#4B0150' }}>Schedule posts to be published at optimal times for maximum engagement.</p>
                            </div>
                        </div>
                        <div className="card text-center" style={{ backgroundColor: isDarkMode ? '#444' : '#fff', color: isDarkMode ? '#fff' : '#333' }}>
                            <div className="card-body">
                                <FontAwesomeIcon icon={faCog} className="display-4 mb-3" style={{ color: isDarkMode ? '#fff' : '#4B0150' }}/> {/* Change to the faCog icon */}
                                <h5 className="card-title" style={{ color: isDarkMode ? '#fff' : '#4B0150' }}>Settings</h5>
                                <p className="card-text" style={{ color: isDarkMode ? '#fff' : '#4B0150' }}>Fine-tune your social media strategy with optimized settings.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
