import { useState } from "react";

function TodoInput({ addTask }) {

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(input.trim() === "") return;

    addTask(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">

      <input
        type="text"
        placeholder="Add a new task..."
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      />

      <button>Add</button>

    </form>
  );
}

export default TodoInput;