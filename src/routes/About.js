import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div className="App">
      <h1>About</h1>
      <Link to="/" className="btn">Root</Link>
      <Link to="team" className="btn">Team</Link>
      <Link to="/home" className="btn">Home</Link>
      <Outlet />
    </div>
  );
}