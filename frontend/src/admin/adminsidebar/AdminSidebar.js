import React, { useState } from 'react';
import './AdminSidebar.css'; 

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen && (
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          &#9776; 
        </button>
      )}
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-close" onClick={toggleSidebar}>
          &times;  
        </div>
        <h2 style={{color:'white',margin:'20px'}}>Admin Panel</h2>
        <a href="/admin/dashboard" className="sidebar-option">Dashboard</a>
        <a href="/admin/students" className="sidebar-option">Students</a>
        {/* <a href="/admin/professors" className="sidebar-option">Professors</a> */}
        <a href="/admin/resources" className="sidebar-option">Resources</a>
        <a href="/admin/references" className="sidebar-option">References</a>
        <a href="/admin/login" className="sidebar-option">Logout</a>
      </div>
    </>
  );
}