import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <Link to="/" className="btn">Root</Link>
      <Link to="/home" className="btn">Home</Link>
    </>
  );
}