import React, { useState } from "react";
import "..App.css";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
  };

  return (
    <section className="todo-container">
      <div className="todo">
        <h1 className="header">Gonna Do It Todo's</h1>
        <div>
          <div>
            <input
              type="text"
              placeholder="What's up for today?"
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>
          <div className="btn-container">
            <button type="submit" className="btn" onClick={addTodo}>
              Submit
            </button>
          </div>
        </div>
        <div className="todo-content">...</div>
      </div>
    </section>
  );
};

export default Todo;
