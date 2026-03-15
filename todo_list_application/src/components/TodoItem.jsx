function TodoItem({ task, deleteTask, toggleTask }) {

  return (
    <li className="todo-item">

      <span
        onClick={() => toggleTask(task.id)}
        className={task.completed ? "completed" : ""}
      >
        {task.text}
      </span>

      <button
        className="delete-btn"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>

    </li>
  );
}

export default TodoItem;