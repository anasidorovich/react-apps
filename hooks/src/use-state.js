import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <HookSwitcher />
    </div>
  );
};

const HookSwitcher = () => {
  const [color, setColor] = useState('white');
  const [fontSize, setFontSize] = useState(14);
  return (

    <div style={{ padding: '10px', backgroundColor: color, fontSize: `${fontSize}px` }}>
      uhiuui
      <button onClick={() => setColor('green')}>Light</button>
      <button onClick={() => setColor('black')}>Dark</button>
      <button onClick={() => setFontSize((s) => s + 5)}>Font</button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);