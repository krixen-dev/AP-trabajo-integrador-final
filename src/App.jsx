import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function getTasksFromStorage() {
  const storedTasks = window.localStorage.getItem("tasks");
  const tasks = JSON.parse(storedTasks);
  return tasks ? tasks : [];
}

const App = () => {
  const [tasks, setTasks] = useState(getTasksFromStorage());


  useEffect(() => {
    console.log('Tasks updated:', tasks);
    if (tasks.length) window.localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  const handleCompleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onCompleteTask={handleCompleteTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default App;
