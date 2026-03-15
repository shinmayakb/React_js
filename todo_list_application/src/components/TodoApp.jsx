import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import "./Todo.css";

function TodoApp() {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task
      )
    );
  };

  const filteredTasks = tasks.filter(task => {
    if(filter === "completed") return task.completed;
    if(filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="todo-container">

      <h1>Todo List</h1>

      <TodoInput addTask={addTask} />

      <FilterButtons setFilter={setFilter} />

      <TodoList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />

    </div>
  );
}

export default TodoApp;