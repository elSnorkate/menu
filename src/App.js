import React from 'react';
import './App.css'; // If you have an App.css file for styles, keep this line

import RestaurantToDoList from './components/RestaurantToDoList';


function App() {
  return (
    <div className="App"> {/* If you have an App.css, you can use styles here */}
      <RestaurantToDoList /> {/* Render your RestaurantToDoList component */}
    </div>
  );
}

export default App;
