import React, { useState } from 'react';
import AdminSidebar from '../adminsidebar/AdminSidebar';
import './AdminReferences.css'; // Import the CSS file for styling

// Sample JSON-shaped data
const initialReferencesData = [
  {
    id: 1,
    name: 'Reference A',
    author: 'Author A',
    topic: 'Topic A',
    price: '$10',
  },
  {
    id: 2,
    name: 'Reference B',
    author: 'Author B',
    topic: 'Topic B',
    price: '$20',
  },
  {
    id: 3,
    name: 'Reference C',
    author: 'Author C',
    topic: 'Topic C',
    price: '$30',
  },
];

export default function AdminReferences() {
  const [referencesData, setReferencesData] = useState(initialReferencesData);
  const [formVisible, setFormVisible] = useState(false);
  const [currentReference, setCurrentReference] = useState(null);
  const [formData, setFormData] = useState({ name: '', author: '', topic: '', price: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentReference) {
      // Edit existing reference
      setReferencesData(referencesData.map(ref => (ref.id === currentReference ? { ...formData, id: currentReference } : ref)));
    } else {
      // Add new reference
      const newReference = { ...formData, id: Date.now() };
      setReferencesData([...referencesData, newReference]);
    }
    resetForm();
  };

  const handleEdit = (id) => {
    const referenceToEdit = referencesData.find(ref => ref.id === id);
    setFormData(referenceToEdit);
    setCurrentReference(id);
    setFormVisible(true);
  };

  const handleDelete = (id) => {
    setReferencesData(referencesData.filter(ref => ref.id !== id));
  };

  const resetForm = () => {
    setFormData({ name: '', author: '', topic: '', price: '' });
    setCurrentReference(null);
    setFormVisible(false);
  };

  return (
    <>
      <AdminSidebar />
      <div className="admin-references">
        <div className="content">
          {/* <div className='admin-reference-content'> */}
          <h1>References</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span />
            <button className="add-button" onClick={() => setFormVisible(true)}>Add Reference</button>
          </div>
          {/* </div> */}
          
          {formVisible && (
            <div className="form-overlay">
              <form className="reference-form" onSubmit={handleSubmit}>
                <h2>{currentReference ? 'Edit Reference' : 'Add Reference'}</h2>
                <label>
                  Name:
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                </label>
                <label>
                  Author/Researcher:
                  <input type="text" name="author" value={formData.author} onChange={handleInputChange} required />
                </label>
                <label>
                  Topic:
                  <input type="text" name="topic" value={formData.topic} onChange={handleInputChange} required />
                </label>
                <label>
                  Price:
                  <input type="text" name="price" value={formData.price} onChange={handleInputChange} required />
                </label>
                <button type="submit">Submit</button>
                <button type="button" style={{ backgroundColor: 'red', color: 'white' }} onClick={resetForm}>Cancel</button>
              </form>
            </div>
          )}

          <table className="references-table">
            <thead>
              <tr>
                <th>Number</th>
                <th>Name of Reference</th>
                <th>Author/Researcher</th>
                <th>Topic</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {referencesData.map((reference, index) => (
                <tr key={reference.id}>
                  <td>{index + 1}</td>
                  <td>{reference.name}</td>
                  <td>{reference.author}</td>
                  <td>{reference.topic}</td>
                  <td>{reference.price}</td>
                  <td>
                    <button className="edit-button" onClick={() => handleEdit(reference.id)}>Edit</button>
                    <button className="delete-button" onClick={() => handleDelete(reference.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
 );
}