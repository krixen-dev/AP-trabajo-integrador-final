import React, { useState } from 'react';

const TaskItem = ({ task, onCompleteTask, onDeleteTask }) => {
  const [completed, setCompleted] = useState(task.completed);

  const handleComplete = () => {
    setCompleted(!completed);
    onCompleteTask(task.id);
  };

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  return (
    <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {task.name}
      <button onClick={handleComplete}>{completed ? 'Undo' : 'Complete'}</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
