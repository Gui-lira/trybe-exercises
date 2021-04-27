import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
};

const compromissos = ['estudar', 'aprender', 'comer'];

const Test = () => {
  compromissos.forEach((element) => task(element));
};

function App() {
  return (
    <ol>
      {compromissos.map((element) => task(element))}
    </ol>
  );
}

export default App;
