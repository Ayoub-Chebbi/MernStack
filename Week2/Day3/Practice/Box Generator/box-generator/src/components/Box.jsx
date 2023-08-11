import React, { useState } from 'react';

const Box = () => {
  const [color, setColor] = useState('');
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color) {
      setBoxes([...boxes, color]);
      setColor('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Add Box</button>
      </form>
      <div>
        {boxes.map((boxColor, key) => (
          <div
            key={key}
            style={{
              backgroundColor: boxColor,
              width: '100px',
              height: '100px',
              margin: '10px',
              display: 'inline-block',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Box;
