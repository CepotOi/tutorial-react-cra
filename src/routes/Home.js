import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      <h1>Home</h1>
      <Link to="/" className="btn">Root</Link>
      <Link to="/about" className="btn">About</Link>
    </div>
  );
}