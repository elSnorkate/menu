// components/RestaurantToDoList.js
import React, { useState } from 'react';
import RestaurantToDoListDisplay from './RestaurantToDoListDisplay';
import { renderToString } from 'react-dom/server';

const RestaurantToDoList = () => {
  const [entradaTasks, setEntradaTasks] = useState([]);
  const [bebidasPostresTasks, setBebidasPostresTasks] = useState([]);
  const [platosCartaTasks, setPlatosCartaTasks] = useState([]);
  const [platosTasks, setPlatosTasks] = useState([]);
  const [entradaInput, setEntradaInput] = useState('');
  const [bebidasPostresInput, setBebidasPostresInput] = useState('');
  const [platosCartaInput, setPlatosCartaInput] = useState('');
  const [platosInput, setPlatosInput] = useState('');

  const handleAddTask = (category, task) => {
    if (!task) {
      alert('Please enter a task before adding.');
      return;
    }

    switch (category) {
      case 'Entrada':
        setEntradaTasks([...entradaTasks, task]);
        setEntradaInput('');
        break;
      case 'Bebidas y Postres':
        setBebidasPostresTasks([...bebidasPostresTasks, task]);
        setBebidasPostresInput('');
        break;
      case 'Platos a la Carta':
        setPlatosCartaTasks([...platosCartaTasks, task]);
        setPlatosCartaInput('');
        break;
      case 'Platos':
        setPlatosTasks([...platosTasks, task]);
        setPlatosInput('');
        break;
      default:
        break;
    }
  };

  const removeTask = (category, index) => {
    switch (category) {
      case 'Entrada':
        setEntradaTasks((prevTasks) => {
          const updatedTasks = [...prevTasks];
          updatedTasks.splice(index, 1);
          return updatedTasks;
        });
        break;
      case 'Bebidas y Postres':
        setBebidasPostresTasks((prevTasks) => {
          const updatedTasks = [...prevTasks];
          updatedTasks.splice(index, 1);
          return updatedTasks;
        });
        break;
      case 'Platos a la Carta':
        setPlatosCartaTasks((prevTasks) => {
          const updatedTasks = [...prevTasks];
          updatedTasks.splice(index, 1);
          return updatedTasks;
        });
        break;
      case 'Platos':
        setPlatosTasks((prevTasks) => {
          const updatedTasks = [...prevTasks];
          updatedTasks.splice(index, 1);
          return updatedTasks;
        });
        break;
      default:
        break;
    }
  };

  const handleOpenInNewTab = () => {
    const newTab = window.open('', '_blank');
    newTab.document.body.innerHTML = `
      <div style="padding: 20px;">
        <button onclick="window.close()">Close Tab</button>
        ${renderToString(<RestaurantToDoListDisplay
          entradaTasks={entradaTasks}
          bebidasPostresTasks={bebidasPostresTasks}
          platosCartaTasks={platosCartaTasks}
          platosTasks={platosTasks}
        />)}
      </div>
    `;
  };

  return (
    <div>
      <h1>Restaurant To-Do List</h1>

      <div>
        <h3>Entrada</h3>
        <input
          type="text"
          placeholder="Enter task"
          value={entradaInput}
          onChange={(e) => setEntradaInput(e.target.value)}
        />
        <button onClick={() => handleAddTask('Entrada', entradaInput)}>Add Task</button>
      </div>
      <ul>
        {entradaTasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask('Entrada', index)}>Remove</button>
          </li>
        ))}
      </ul>

      <div>
        <h3>Bebidas y Postres</h3>
        <input
          type="text"
          placeholder="Enter task"
          value={bebidasPostresInput}
          onChange={(e) => setBebidasPostresInput(e.target.value)}
        />
        <button onClick={() => handleAddTask('Bebidas y Postres', bebidasPostresInput)}>Add Task</button>
      </div>
      <ul>
        {bebidasPostresTasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask('Bebidas y Postres', index)}>Remove</button>
          </li>
        ))}
      </ul>

      <div>
        <h3>Platos a la Carta</h3>
        <input
          type="text"
          placeholder="Enter task"
          value={platosCartaInput}
          onChange={(e) => setPlatosCartaInput(e.target.value)}
        />
        <button onClick={() => handleAddTask('Platos a la Carta', platosCartaInput)}>Add Task</button>
      </div>
      <ul>
        {platosCartaTasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask('Platos a la Carta', index)}>Remove</button>
          </li>
        ))}
      </ul>

      <div>
        <h3>Platos</h3>
        <input
          type="text"
          placeholder="Enter task"
          value={platosInput}
          onChange={(e) => setPlatosInput(e.target.value)}
        />
        <button onClick={() => handleAddTask('Platos', platosInput)}>Add Task</button>
      </div>
      <ul>
        {platosTasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask('Platos', index)}>Remove</button>
          </li>
        ))}
      </ul>

      <button onClick={handleOpenInNewTab}>Open in New Tab (Without Inputs)</button>
    </div>
  );
};

export default RestaurantToDoList;
