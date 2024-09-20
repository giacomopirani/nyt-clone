import axios from "axios";
import { useEffect, useState } from "react";

// Definisci l'interfaccia
interface Article {
  title: string;
  abstract?: string;
  url: string;
  multimedia?: { url: string }[];
}

export default function LatestNews() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchLatestNews = async () => {
      const response = await axios.get(
        "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=rwgaROyZJvGpZslsTzVD87nUIBkvLQld"
      );
      setArticles(response.data.results);
    };
    fetchLatestNews();
  }, []);

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Latest News</h2>
      {articles.map((article, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold">{article.title}</h3>
          <p className="text-sm">
            {article.abstract || "No abstract available"}
          </p>
        </div>
      ))}
    </section>
  );
}
