import { useState } from 'react';

function Form({ colorFunction }) {
  const [color, setColor] = useState('#000000');

  function handleChange(newColor) {
    setColor(newColor);
  }

  function handleSubmit(event) {
    event.preventDefault();
    colorFunction(color);
  }

  const stylesForm = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  };

  const stylesInput = {
    display: 'block',
    width: '235px',
    height: '48px',
  };

  const stylesBtn = {
    width: '100px',
    height: '28px',
  };

  return (
    <form style={stylesForm} onSubmit={handleSubmit}>
      <input
        type="color"
        value={color}
        onChange={(event) => handleChange(event.target.value)}
        style={stylesInput}
      />
      <button style={stylesBtn} type="submit">
        change color
      </button>
    </form>
  );
}

export default Form;
