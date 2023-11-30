import React, { useState } from 'react';
import "../css/TaskForm.css"

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [urgency, setUrgency] = useState('');

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleUrgencyChange = (e) => {
    setUrgency(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: new Date().getTime(),
      name: taskName,
      description: description,
      completed: false,
      urgencyColor: getUrgencyColor(urgency),
    };
    onAddTask(newTask);
    setTaskName('');
    setDescription('');
    setUrgency('');
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'urgent':
        return 'red';
      case 'low-urgency':
        return 'blue';
      case 'no-urgency':
        return 'green';
      default:
        return 'black';
    }
  };


  return (
    <form onSubmit={handleSubmit} className='task-form'>
      <input type="text" value={taskName} onChange={handleInputChange} required placeholder='New task..' />
      <input type="text" value={description} onChange={handleDescriptionChange} placeholder="Description (optional)" />
      <select value={urgency} onChange={handleUrgencyChange} required>
        <option value="" disabled>Urgency</option>
        <option value="urgent" className='urgent'>urgent</option>
        <option value="low-urgency" className='low-urgency'>low urgency</option>
        <option value="no-urgency" className='no-urgency'>no urgency</option>
      </select>
      <button type="submit" className='button-submit'>Add Task</button>
    </form>
  );
};

export default TaskForm;
