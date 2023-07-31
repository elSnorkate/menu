import React from 'react';

const RestaurantToDoListDisplay = ({ entradaTasks, bebidasPostresTasks, platosCartaTasks, platosTasks }) => {

  return (
    <div>
      <h1>Restaurant To-Do List (Display)</h1>

      <div>
        <h3>Entrada</h3>
        <ul>
          {entradaTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Bebidas y Postres</h3>
        <ul>
          {bebidasPostresTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Platos a la Carta</h3>
        <ul>
          {platosCartaTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Platos</h3>
        <ul>
          {platosTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantToDoListDisplay;
