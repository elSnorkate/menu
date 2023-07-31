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

  const handleKeyPress = (event, category) => {
    if (event.key === 'Enter') {
      switch (category) {
        case 'Entrada':
          handleAddTask('Entrada', entradaInput);
          break;
        case 'Bebidas y Postres':
          handleAddTask('Bebidas y Postres', bebidasPostresInput);
          break;
        case 'Platos a la Carta':
          handleAddTask('Platos a la Carta', platosCartaInput);
          break;
        case 'Platos':
          handleAddTask('Platos', platosInput);
          break;
        default:
          break;
      }
    }
  };

  const handleOpenInNewTab = () => {
    const newTab = window.open('', '_blank');
    newTab.document.body.innerHTML = renderToString(<RestaurantToDoListDisplay
      entradaTasks={entradaTasks}
      bebidasPostresTasks={bebidasPostresTasks}
      platosCartaTasks={platosCartaTasks}
      platosTasks={platosTasks}
    />);
  };

  return (
    <div>
      <h1>Menu del dia </h1>

      <div>
        <h3>Entrada</h3>
        <input
          type="text"
          placeholder="Insertar opcion aqui"
          value={entradaInput}
          onChange={(e) => setEntradaInput(e.target.value)}
          onKeyPress={(e) => handleKeyPress(e, 'Entrada')}
        />
        <button onClick={() => handleAddTask('Entrada', entradaInput)}>Añadir</button>
      </div>
      <ul>
        {entradaTasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask('Entrada', index)}>Remover</button>
          </li>
        ))}
      </ul>

      <div>
        <h3>Bebidas y Postres</h3>
        <input
          type="text"
          placeholder="Insertar opcion aqui"
          value={bebidasPostresInput}
          onChange={(e) => setBebidasPostresInput(e.target.value)}
          onKeyPress={(e) => handleKeyPress(e, 'Bebidas y Postres')}
        />
        <button onClick={() => handleAddTask('Bebidas y Postres', bebidasPostresInput)}>Añadir</button>
      </div>
      <ul>
        {bebidasPostresTasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask('Bebidas y Postres', index)}>Remover</button>
          </li>
        ))}
      </ul>

      <div>
        <h3>Platos</h3>
        <input
          type="text"
          placeholder="Insertar opcion aqui"
          value={platosCartaInput}
          onChange={(e) => setPlatosCartaInput(e.target.value)}
          onKeyPress={(e) => handleKeyPress(e, 'Platos a la Carta')}
        />
        <button onClick={() => handleAddTask('Platos a la Carta', platosCartaInput)}>Añadir</button>
      </div>
      <ul>
        {platosCartaTasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask('Platos a la Carta', index)}>Remover</button>
          </li>
        ))}
      </ul>

      <div>
        <h3>Platos a la carta</h3>
        <input
          type="text"
          placeholder="Insertar opcion aqui"
          value={platosInput}
          onChange={(e) => setPlatosInput(e.target.value)}
          onKeyPress={(e) => handleKeyPress(e, 'Platos')}
        />
        <button onClick={() => handleAddTask('Platos', platosInput)}>Añadir</button>
      </div>
      <ul>
        {platosTasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask('Platos', index)}>Remover</button>
          </li>
        ))}
      </ul>
      
      <button onClick={handleOpenInNewTab}>Servir</button>
    </div>
  );
};

export default RestaurantToDoList;
