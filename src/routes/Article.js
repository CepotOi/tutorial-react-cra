import { Link, useParams } from "react-router-dom";
import { getArticle } from "../DataArticles.js";

export default function Article() {
  const params = useParams();
  const article = getArticle(params.articleId);
  return (
    <div className="App">
      <h1>{article ? article.title : 404}</h1>
      <p>{article ? article.content : 'Not Found'}</p>

      <Link to="/articles" className="btn">Articles</Link>
    </div>
  );
}