import React, { useState } from 'react';
import AdminSidebar from '../adminsidebar/AdminSidebar';
import './AdminStudents.css'; // Import the external CSS file

const students = [
  {
    username: 'john_doe',
    age: 21,
    mobile: '123-456-7890',
    coursesEnrolled: 3,
    totalCourses: 5,
    resourcesDownloaded: 10,
    testsTaken: 2,
    coursesCompleted: 4,
  },
  {
    username: 'jane_smith',
    age: 22,
    mobile: '987-654-3210',
    coursesEnrolled: 2,
    totalCourses: 4,
    resourcesDownloaded: 5,
    testsTaken: 1,
    coursesCompleted: 3,
  },
  {
    username: 'sam_brown',
    age: 23,
    mobile: '555-555-5555',
    coursesEnrolled: 1,
    totalCourses: 3,
    resourcesDownloaded: 2,
    testsTaken: 0,
    coursesCompleted: 1,
  },
];

export default function AdminStudents() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [checkboxes, setCheckboxes] = useState(Array(students.length).fill(false));
  const [isCreatingTest, setIsCreatingTest] = useState(false); // State to manage test creation

  const handleViewStudent = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
  };

  const handleCheckboxChange = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);
  };

  const handleCreateTest = () => {
    setIsCreatingTest(true); // Show checkboxes and start test button
  };

  const handleStartTest = () => {
    alert('Test started!'); // Alert when test is started
    setIsCreatingTest(false); // Go back to initial state
    setCheckboxes(Array(students.length).fill(false)); // Reset checkboxes
  };

  return (
    <div className="admin-students-container">
      <AdminSidebar />
      <div className="student-table-container">
        <h2>Enrolled Students</h2>
        <div className="button-container">
          {!isCreatingTest ? (
            <button onClick={handleCreateTest}>Create Test</button>
          ) : (
            <>
              <button onClick={handleStartTest} disabled={!checkboxes.some(checked => checked)}>Start Test</button>
            </>
          )}
        </div>
        <table>
          <thead>
            <tr>
              {isCreatingTest && <th>Select</th>} {/* Conditionally render checkbox column */}
              <th>Username</th>
              <th>Age</th>
              <th>Mobile Number</th>
              <th>No. of Courses Enrolled</th>
              <th>Total Courses</th>
              <th>No. of Resources Downloaded</th>
              <th>No. of Tests Taken</th>
              <th>No. of Courses Completed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="table-row">
                {isCreatingTest && (
                  <td>
                    <input
                      type="checkbox"
                      checked={checkboxes[index]}
                      onChange={() => handleCheckboxChange(index)}
                      className='table-checkbox'
                    />
                  </td>
                )}
                <td>{student.username}</td>
                <td>{student.age}</td>
                <td>{student.mobile}</td>
                <td>{student.coursesEnrolled}</td>
                <td>{student.totalCourses}</td>
                <td>{student.resourcesDownloaded}</td>
                <td>{student.testsTaken}</td>
                <td>{student.coursesCompleted}</td>
                <td>
                  <button className="view-button" onClick={() => handleViewStudent(student)}>View Student</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedStudent && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>&times;</span>
              <h2>Student Details</h2>
              <p><strong>Username:</strong> {selectedStudent.username}</p>
              <p><strong>Age:</strong> {selectedStudent.age}</p>
              <p><strong> Mobile:</strong> {selectedStudent.mobile}</p>
              <p><strong>No. of Courses Enrolled:</strong> {selectedStudent.coursesEnrolled}</p>
              <p><strong>Total Courses:</strong> {selectedStudent.totalCourses}</p>
              <p><strong>No. of Resources Downloaded:</strong> {selectedStudent.resourcesDownloaded}</p>
              <p><strong>No. of Tests Taken:</strong> {selectedStudent.testsTaken}</p>
              <p><strong>No. of Courses Completed:</strong> {selectedStudent.coursesCompleted}</p>
              <div className="student-actions">
                <button className="edit-button">Edit Student</button>
                <button className="delete-button">Delete Student</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}