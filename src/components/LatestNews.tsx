import { useEffect, useState } from "react";
import { getLatestNewsResponse } from "../api/api";
import NewsSection from "../components/NewsSection";
import LoadingSpinner from "./LoadingSpinner";

export default function LatestNews() {
  const [latestNews, setLatestNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLatestNews = async () => {
    try {
      const response = await getLatestNewsResponse();
      setLatestNews(response.results);
      setIsLoading(false);
    } catch (error) {
      console.error("Errore nel recupero delle latest news", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestNews();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <NewsSection title="Latest News" articles={latestNews} />;
}
