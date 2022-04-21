import logo from './logo.svg';
import './App.css';
import Animal from './Animal';

function App() {
  return (
    <div>
      <Animal name='shun' src='dog.png' color="red" />
      <Animal name='katu' src='cat.jpg' color="pink" />
      <Animal name='pix' src='elephant.jpg' />

    </div>
  );
}

export default App;
