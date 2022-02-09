import logo from './logo.svg';
import './App.css';
import { Heading } from './Heading';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading children="WellCome To React" />
        <Heading>Test</Heading>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
