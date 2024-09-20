import axios from "axios";
import { useEffect, useState } from "react";

interface Article {
  title: string;
  abstract: string;
  multimedia?: { url: string }[];
}

export default function TopNews() {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=rwgaROyZJvGpZslsTzVD87nUIBkvLQld"
      );
      setNews(response.data.results);
      setLoading(false);
    } catch (err) {
      setError("Errore nel recupero delle notizie");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return <p>Caricamento...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="news-container">
      {news.map((article, index) => (
        <div key={index} className="mb-4 p-4 border-b">
          <h3 className="font-bold text-lg">{article.title}</h3>
          <p className="mt-2">{article.abstract}</p>
          {article.multimedia && article.multimedia[0] && (
            <img
              src={article.multimedia[0].url}
              alt={article.title}
              className="mt-2 w-full"
            />
          )}
        </div>
      ))}
    </div>
  );
}
