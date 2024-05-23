import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title, searchBar, toggleSidebar }) => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#4B0150' }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/" style={{ color: 'white', fontWeight: 'bold', fontFamily: 'Times New Roman', letterSpacing: '0.5px', marginRight: 'auto' ,fontSize:'22px'}}>{title}</Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          {searchBar && (
            <form className="d-flex ml-right">
              <input
                className="form-control me-1"
                type="search"
                placeholder=""
                aria-label="Search"
                style={{
                  width: '160px',
                  height: '28px',
                  margin: '5px',
                  backgroundColor: '#f8f9fa',
                  color: '#4B0150',
                  marginLeft: '500px' 
                }}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                style={{ height: '30px', margin: '5px', width: '90px', backgroundColor: '#4B0150', color: '#f8f9fa', padding:'2px' }}
              >
                Search
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  title: 'Social Media Dashboard'
};

export default Header;
