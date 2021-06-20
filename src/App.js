import React, { useState } from 'react';
import './App.css';

import Swatch from './Swatch.js';
import Picker from './Picker.js';

const inititalColors = [
  { name: "green", hex: "#00FF00" },
  { name: "pumpkin", hex: "#FF9900" },
  { name: "cornflower", hex: "#6495ed" },
  { name: "teal", hex: "#008080" },
  { name: "peru", hex: "#cd853f" },
];

function App() {
  const [colors, setColors] = useState([]);

  const removeColor = name => {
    setColors(colors => colors.filter(color => color.name !== name));
  }

  const addColor = newColor => {
    setColors(colors => [newColor, ...colors.filter(color => color.name !== newColor.name)]);
  }

  return (
    <div id="swatches-root">
      <Picker add={addColor} />
      {colors.map(color => <Swatch key={color.name}
        color={color} remove={removeColor} />)}


      {/* <button onClick={() => {
        colors.push({red: '#FF0000'});
      }}>Add</button> */}
    </div>
  );
}

export default App;
