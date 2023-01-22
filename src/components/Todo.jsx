import React, { useState, useEffect } from "react";
import "../App.css";
import { collection, addDoc, getDocs, QuerySnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todo: todo,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.log("Error adding document: ", e);
    }
    const fetchPost = async () => {
      await getDocs(collection(db, "todos")).then((QuerySnapshot) => {
        const newData = QuerySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTodos(newData);
        console.log(todos, newData);
      });
    };

    useEffect(() => {
      fetchPost();
    }, []);
  };

  return (
    <section className="todo-container">
      <div className="todo">
        <h1 className="header">Gonna Do It Todo's</h1>

        <div>
          <input
            type="text"
            placeholder="What's up for today?"
            onChange={(e) => setTodo(e.target.value)}
          />
          <div className="btn-container">
            <button type="submit" className="btn" onClick={addTodo}>
              Submit
            </button>
          </div>
        </div>

        <div className="todo-content">
          {todos?.map((todo, i) => {
            <p key={i}>{todo.todo}</p>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Todo;
