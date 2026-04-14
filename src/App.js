// src/components/TodoList.js
import React, { useState, useEffect } from 'react';
import { doc, deleteDoc, collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';


function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Read data in real-time using onSnapshot
  useEffect(() => {
    const q = query(collection(db, 'todos'), orderBy('createdAt'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todosData = [];
      querySnapshot.forEach((doc) => {
        todosData.push({ id: doc.id, ...doc.data() });
      });
      setTodos(todosData);
    });

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, []);



  // Add data to Firestore
  const addTodo = async (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    try {
      await deleteDoc(collection(db, 'todos'), {
        text: newTodo,
        createdAt: new Date(),
      });
      setNewTodo('');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  // deletar do database

    const deletTodo = async (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    try {
      await addDoc(collection(db, 'todos'), {
        text: newTodo,
        createdAt: new Date(),
      });
      setNewTodo('');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // deletar
  function delet() {
        document.getElementById("elementoParaDeletar").remove();
    }
    

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="email/login"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li id="elementoParaDeletar" key={todo.id}>{todo.text} <button onClick={delet}   type="submit">Delet</button></li> 
          
        ))}
      </ul>
    </div>

  );
  
}

export default App;

