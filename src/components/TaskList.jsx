import React from 'react';
import TaskItem from './TaskItem';
import "../css/TaskList.css"

const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {
  return (
    <div className='taskList-container'>
      {tasks.map((task) => (
        <TaskItem className='task-item'
          key={task.id}
          task={task}
          description={task.description}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
