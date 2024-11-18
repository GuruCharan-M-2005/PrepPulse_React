import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'; // Import your CSS file

export default function Ccalendar () {
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [task, setTask] = useState({ name: '', date: '', time: '', details: '' });
  const [selectedDateTasks, setSelectedDateTasks] = useState([]);
  const [showTasks, setShowTasks] = useState(true); // State to control task table visibility

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3006/tasks');
    setTasks(response.data);
    filterTasksByDate(date); // Filter tasks when fetching
  };

  const handleInputChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const addTask = async () => {
    const newTask = { ...task, date: date.toISOString().split('T')[0] }; // Store date in YYYY-MM-DD format
    await axios.post('http://localhost:3006/tasks', newTask);
    fetchTasks();
    setShowForm(false);
    setTask({ name: '', date: '', time: '', details: '' });
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    filterTasksByDate(newDate); // Filter tasks based on the selected date
  };

  const filterTasksByDate = (selectedDate) => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth(); 
    const day = selectedDate.getDate()+1;
    const startOfDay = new Date(year, month, day); 
    const formattedDate = startOfDay.toISOString().split('T')[0]; 
    setShowTasks(true);
    const tasksForDate = tasks.filter(task => task.date === formattedDate);
    setSelectedDateTasks(tasksForDate);
};

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:3006/tasks/${id}`);
    fetchTasks(); // Refresh tasks after deletion
  };

  const toggleForm = () => {
    setShowForm(prev => !prev);
  };

  const toggleTaskTable = () => {
    setShowTasks(prev => !prev);
  };

  return (
    <div className="user-calendar">
      <div className="sidebar">
        <h2>Sidebar</h2>
        {/* Add sidebar contents here */}
      </div>
      <div className="calendar-container">
        <div className="calendar-view">
          <Calendar onChange={handleDateChange} value={date} />
          <button className="add-task-button" onClick={toggleForm}>Add Task</button>
        </div>

        {showForm && (
          <div className="task-form">
            <h2 className="form-title">Add Task</h2>
            <input type="text" name="name" placeholder="Task Name" value={task.name} onChange={handleInputChange} />
            <input type="date" name="date" value={task.date} onChange={handleInputChange} />
            <input type="time" name="time" value={task.time} onChange={handleInputChange} />
            <textarea name="details" placeholder="Task Details" value={task.details} onChange={handleInputChange}></textarea>
            <button type='submit' onClick={addTask}>Submit</button>
            <button type='button' onClick={toggleForm}>Cancel</button>
          </div>
        )}

        {showTasks && selectedDateTasks.length > 0 && (
          <div className="task-overlay">
            <button className="close-button" onClick={toggleTaskTable}>X</button>
            <h2>Tasks for {date.toISOString().split('T')[ 0]}</h2>
            <ul>
              {selectedDateTasks.map(task => (
                <li key={task.id}>
                  <span>{task.name}</span>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}