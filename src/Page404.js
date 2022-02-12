import { Link } from 'react-router-dom';

export default function Page404() {
  return (
    <div className="App">
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/articles" className="btn">Articles</Link>
    </div>
  );
}