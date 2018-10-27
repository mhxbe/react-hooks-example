import React, { useState, useEffect } from 'react';

function ReactHookComponent() {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState(null);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  useEffect(() => {
    const defaultColor = '#282c34';
    const AppHeader = document.querySelector('.App-header');
    const colorMap = {
      strawberry: 'red',
      papaya: 'orange',
      banana: 'yellow'
    }
    fruit
      ? AppHeader.style.backgroundColor = colorMap[fruit]
      : AppHeader.style.backgroundColor = defaultColor;
    
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <hr/>

      <p>Strawberry, papaya or banana?: {fruit}</p>
      <button onClick={() => setFruit('strawberry')}>
        Strawberry
      </button>
      <button onClick={() => setFruit('papaya')}>
        Papaya
      </button>
      <button onClick={() => setFruit('banana')}>
        Banana
      </button>

      <hr/>

      <p>Hey</p>
    </div>
  );
}

export default ReactHookComponent;