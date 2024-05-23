import React, { useState } from 'react';

const Settings = ({ toggleDarkMode, isDarkMode }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedCountry, setSelectedCountry] = useState('United States');
  const [isSettingsSaved, setIsSettingsSaved] = useState(false);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleSaveSettings = () => {
    // Save settings logic goes here (you can implement it based on your application's requirements)
    setIsSettingsSaved(true);
    setTimeout(() => {
      setIsSettingsSaved(false);
    }, 3000); // Reset the saved message after 3 seconds
  };

  const handleResetSettings = () => {
    // Reset settings logic goes here (reset selectedLanguage, selectedCountry to default values)
    setSelectedLanguage('English');
    setSelectedCountry('United States');
    setIsSettingsSaved(true);
    setTimeout(() => {
      setIsSettingsSaved(false);
    }, 3000); // Reset the saved message after 3 seconds
  };

  return (
    <div style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      <h2>Settings</h2>
      {isSettingsSaved && <div style={styles.savedMessage}>Settings saved successfully!</div>}
      <div style={styles.setting}>
        <label style={styles.label}>Dark Mode</label>
        <div>
          <input type="checkbox" style={styles.checkbox} checked={isDarkMode} onChange={toggleDarkMode} />
        </div>
      </div>
      <div style={styles.setting}>
        <label style={styles.label}>Language</label>
        <select value={selectedLanguage} onChange={handleLanguageChange} style={styles.select}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          {/* Add more language options here */}
        </select>
      </div>
      <div style={styles.setting}>
        <label style={styles.label}>Country</label>
        <select value={selectedCountry} onChange={handleCountryChange} style={styles.select}>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Canada">Canada</option>
          {/* Add more country options here */}
        </select>
      </div>
      <div>
        <button style={styles.button} onClick={handleSaveSettings}>Save Settings</button>
        <button style={styles.button} onClick={handleResetSettings}>Reset Settings</button>
      </div>
    </div>
  );
};

const styles = {
  lightContainer: {
    width: '60%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    color: '#333', 
  },
  darkContainer: {
    width: '60%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#333', 
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(255,255,255,0.1)',
    color: '#fff', 
  },
  setting: {
    marginBottom: '20px',
  },
  label: {
    fontWeight: 'bold',
    marginRight: '10px',
  },
  checkbox: {
    marginRight: '10px',
  },
  select: {
    padding: '5px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
  },
  button: {
    marginRight: '10px',
    padding: '8px 12px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'rgb(210, 210, 210)',
    color: 'rgb(60, 60, 60)',
    cursor: 'pointer',
  },
  savedMessage: {
    marginBottom: '10px',
    padding: '5px',
    borderRadius: '5px',
    backgroundColor: '#28a745',
    color: '#fff',
    textAlign: 'center',
  },
};

export default Settings;
