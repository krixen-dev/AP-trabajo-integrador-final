import React, { useState } from 'react';
import '../css/TaskItem.css'

const TaskItem = ({ task, onCompleteTask, onDeleteTask }) => {
  const [completed, setCompleted] = useState(task.completed);
  const [urgencyColor, setUrgencyColor] = useState(task.urgencyColor || 'white');

  const handleComplete = () => {
    setCompleted(!completed);
    onCompleteTask(task.id);
  };

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  return (
    <div className='task-item' style={{ backgroundColor: completed ? '#4a4a4a' : urgencyColor }}>
      <h3 style={{ textDecoration: completed ? 'line-through' : 'none', color: completed ? 'black' : 'white' }}>
        {task.name}
      </h3>
      <p style={{ textDecoration: completed ? 'line-through' : 'none', color: completed ? 'black' : 'white' }}>
        {task.description}
      </p>
      <div className='container-button'>
        <button onClick={handleComplete}>{completed ? 'Undo' : 'Complete'}</button>
        <button onClick={handleDelete} className='button-delete'>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
