import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';

function App() {
  return (
    <div>
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      </header>
    </div>
  );
}

export default App;
