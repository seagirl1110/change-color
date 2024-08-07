import { useState } from 'react';
import './App.css';
import Form from './components/form';

function App() {
  const [color, setColor] = useState('');

  function updateColor(newColor) {
    setColor(newColor);
  }

  const styles = {
    width: '100vw',
    height: '100vh',
    backgroundColor: color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={styles}>
      <Form colorFunction={updateColor} />
    </div>
  );
}

export default App;
