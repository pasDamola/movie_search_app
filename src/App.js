import logo from './logo.svg';
import './App.css';
import Header from './Header'

function App() {
  return (
    <div className="App">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Movie Search App</h1>
    </div>
  );
}

export default App;
