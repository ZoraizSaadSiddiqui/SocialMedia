import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faCog, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div>
            <div className={`sidebar-toggle ${isSidebarOpen ? 'hide' : ''}`} onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars} style={{ color: 'black', fontSize: '20px', cursor: 'pointer' }} />
            </div>
            {isSidebarOpen && (
                <div className="sidebar" style={styles.sidebar}>
                    <div className="sidebar-toggle" onClick={toggleSidebar} style={{ textAlign: 'right', padding: '10px' }}>
                        <FontAwesomeIcon icon={faTimes} style={{ color: 'white', fontSize: '20px', cursor: 'pointer' }} />
                    </div>
                    <div className="sidebar-menu">
                        <SidebarItem icon={faHome} text="Home" link="/home" closeSidebar={closeSidebar} />
                        <SidebarItem icon={faUser} text="Profile" link="/profile" closeSidebar={closeSidebar} />
                        <SidebarItem icon={faCog} text="Settings" link="/settings" closeSidebar={closeSidebar} />
                        <SidebarItem icon={faEnvelope} text="Posts" link="/posts" closeSidebar={closeSidebar} /> {/* New Posts link */}
                    </div>
                </div>
            )}
        </div>
    );
};

const SidebarItem = ({ icon, text, link, closeSidebar }) => {
    const [isHovered, setIsHovered] = useState(false);

    const sidebarItemStyles = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px', 
        cursor: 'pointer',
        textDecoration: 'none',
        color: '#fff',
        transition: 'background-color 0.3s', 
        ...(isHovered && { backgroundColor: '#C38EC7' }), 
    };

    const sidebarIconStyles = {
        marginRight: '10px',
        transition: 'color 0.3s', 
        ...(isHovered && { color: '#4B0150' }), 
    };

    const handleClick = () => {
        closeSidebar(); 
    };

    return (
        <Link
            to={link}
            style={sidebarItemStyles}
            className="sidebar-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick} 
        >
            <FontAwesomeIcon icon={icon} style={sidebarIconStyles} />
            <span>{text}</span>
        </Link>
    );
};

const styles = {
    sidebar: {
        width: '250px',
        backgroundColor: '#4B0150',
        color: '#fff',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000, 
    },
};

export default Sidebar;
