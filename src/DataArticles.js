const Articles = [
  {
    id: 1,
    title: 'Article 1',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, et.',
  },
  {
    id: 2,
    title: 'Article 2',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptate doloribus labore eaque voluptas maxime velit suscipit ex quod accusantium!',
  },
  {
    id: 3,
    title: 'Article 3',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, libero. Esse unde explicabo mollitia illo dolorem animi, pariatur ratione! Consequuntur vel praesentium libero nulla beatae esse ex sint rerum consectetur!',
  },
];

export function getArticlesArr() {
  return Articles;
}

export function getArticle(articleId) {
  const article = Articles.find((article) => article.id === parseInt(articleId));
  return article;
}