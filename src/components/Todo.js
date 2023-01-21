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
        <div></div>
      </div>
    </section>
  );
};
