import './App.css';
import { useState, useEffect } from 'react';

const eventFn = () => {
  console.log('h1 clicado');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // });

  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  useEffect(() => {
    console.log('C1: ', counter, 'C2: ', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <h1>Teste 3</h1>
      <h1>
        C1: {counter} C2: {counter2}
      </h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          setCounter2(counter2 + 1);
        }}
      >
        Increment (2)
      </button>
    </div>
  );
}

// class App extends Component {
//   state = {
//     reverse: false,
//   };

//   handleClick = () => {
//     const { reverse } = this.state;
//     this.setState({ reverse: !reverse });
//   };

//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'reverse' : '';

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//           <button type="button" onClick={this.handleClick}>
//             Reverse {reverseClass}
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
