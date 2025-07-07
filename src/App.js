import './App.css';
import Saludo from './components/saludo.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hola</h1>
        <Saludo nombre="Lupe" />
        <h2>Primer proyecto React</h2>
      </header>
    </div>
  );
}

export default App;
