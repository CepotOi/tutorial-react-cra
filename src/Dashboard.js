import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="App">
      <h1>Dashboard</h1>

      <Link to="/" className="btn">Root</Link>
    </div>
  );
}