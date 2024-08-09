import p from 'prop-types';
import './App.css';
import React, { useCallback, useState } from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('Filho, renderizou');
  return <button onClick={() => incrementButton(100)}>+</button>;
});

Button.propTypes = {
  incrementButton: p.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('Pai, renderizou');

  return (
    <div className="App">
      <h1>Teste 3</h1>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
