import './App.css';
import {Loading, Menu, HomePage } from './components'

function App() {
  return (
    <div>
      <header>
        <Menu />
        <Loading />
        <HomePage />
      </header>
    </div>
  );
}

export default App;
