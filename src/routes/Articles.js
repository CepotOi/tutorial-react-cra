import { Link } from "react-router-dom";
import { getArticlesArr } from "../DataArticles.js";

export default function Articles() {
  const articles = getArticlesArr();

  return (
    <div className="App">
      <h1>Articles</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/" className="btn">Root</Link>
    </div>
  );
}