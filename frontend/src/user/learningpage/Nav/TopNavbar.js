import React, { useState } from 'react';
import './TopNavbar.css'; // Import the custom CSS file

const TopNavBar = ({ setSearchQuery }) => {
  const [searchQuery, setSearchQueryState] = useState('');

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQueryState(query);
    setSearchQuery(query);
  };

  return (
    <div className="top-nav">
      <div className="logo">PrepPlus</div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search videos..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default TopNavBar;
