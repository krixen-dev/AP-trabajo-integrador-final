import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ id: new Date().getTime(), name: taskName, completed: false });
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={taskName} onChange={handleInputChange} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
