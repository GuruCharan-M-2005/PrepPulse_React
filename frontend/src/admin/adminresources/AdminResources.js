import React, { useState } from 'react';
import AdminSidebar from '../adminsidebar/AdminSidebar';
import './AdminResources.css'; // Import your CSS file

export default function AdminResources() {
  const resourcesData = [
    { id: 1, name: 'React Basics', source: 'https://reactjs.org/tutorial/tutorial.html', duration: '2 hours', price: '$20' },
    { id: 2, name: 'JavaScript Essentials', source: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', duration: '3 hours', price: '$15' },
    { id: 3, name: 'CSS Flexbox Guide', source: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', duration: '1.5 hours', price: '$10' },
  ];

  const [resources, setResources] = useState(resourcesData);
  const [formVisible, setFormVisible] = useState(false);
  const [newResource, setNewResource] = useState({ id: null, name: '', source: '', duration: '', price: '' });

  const handleChange = (e) => {
    setNewResource({ ...newResource, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newResource.id) {
      setResources(resources.map(resource => resource.id === newResource.id ? newResource : resource));
    } else {
      setResources([...resources, { id: resources.length + 1, ...newResource }]);
    }
    resetForm();
  };

  const handleEdit = (resource) => {
    setNewResource(resource);
    setFormVisible(true);
  };

  const handleDelete = (id) => {
    setResources(resources.filter(resource => resource.id !== id));
  };

  const resetForm = () => {
    setNewResource({ id: null, name: '', source: '', duration: '', price: '' });
    setFormVisible(false);
  };

  return (
    <div>
      <AdminSidebar />
      <div className="resources-container">
        <h1 className='resources-container-topic'>Resources</h1>
        <button className="new-resource-btn" onClick={() => setFormVisible(true)}>New Resource</button>
        
        {formVisible && (
          <div className="form-overlay">
            <form className="resource-form" onSubmit={handleSubmit}>
              <h2>{newResource.id ? 'Edit Resource' : 'Add New Resource'}</h2>
              <input type="text" name="name" placeholder="Name" value={newResource.name} onChange={handleChange} required />
              <input type="text" name="source" placeholder="Source Link" value={newResource.source} onChange={handleChange} required />
              <input type="text" name="duration" placeholder="Duration" value={newResource.duration} onChange={handleChange} required />
              <input type="text" name="price" placeholder="Price" value={newResource.price} onChange={handleChange} required />
              <button type="submit">Submit</button>
              <button type="button" onClick={resetForm}>Cancel</button>
            </form>
          </div>
        )}

        <table className="resources-table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Source Video</th>
              <th>Duration</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource, index) => (
              <tr key={resource.id}>
                <td>{index + 1}</td>
                <td>{resource.name}</td>
                <td>
                  <a href={resource.source} target="_blank" rel="noopener noreferrer" className="view-button">
                    View
                  </a>
                </td>
                <td>{resource.duration}</td>
                <td>{resource.price}</td>
                <td>
                  <button className="edit-button" onClick={() => handleEdit(resource)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(resource.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ div>
  );
}