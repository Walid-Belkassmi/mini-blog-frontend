const fetchArticles = async (slug) => {
  const response = await fetch(`http://localhost:5000/articles/${slug}`);
  const Data = await response.json();
  return Data;
};

const newArticle = async (article, slug) => {
  const response = await fetch(`http://localhost:5000/articles/${slug}`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(article),
  });

  if (response.status === 400) {
    const Data = response.json();
    return Data;
  }
};

export { fetchArticles, newArticle };
