import './App.css';
import CounterComponent from './components/CounterComponent';
import MostrarNombre from './components/MostrarNombre';

function App() {
  const names=[
    "piero",
    "carolina"
  ]
  return (
    <>
    <div className='App'>
      Rendimiento de Componentes
      <MostrarNombre names={names} />
    </div>
    <hr/>
    <div>
      <CounterComponent/>
    </div>
    </>

  );
}

export default App;
