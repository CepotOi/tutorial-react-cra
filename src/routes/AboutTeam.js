import { Link } from "react-router-dom";

export default function AboutTeam() {
  return (
    <div className="App">
      <h1>About Team</h1>
      <Link to="/about" className="btn">About</Link>
      <Link to="/home" className="btn">Home</Link>
    </div>
  );
}