import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/about" className="btn">About</Link>
      <Link to="/articles" className="btn">Articles</Link>
      <Link to="/home" className="btn">Home</Link>
      <Link to="/login" className="btn">Login</Link>
    </div>
  );
}

export default App;
