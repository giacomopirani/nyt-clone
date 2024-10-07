import { useEffect, useState } from "react";
import { getTopNewsResponse } from "../api/api";
import NewsSection from "../components/NewsSection";
import LoadingSpinner from "./LoadingSpinner";

export default function TopNews() {
  const [topNews, setTopNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTopNews = async () => {
    try {
      const response = await getTopNewsResponse();
      setTopNews(response.results);
      setIsLoading(false);
    } catch (error) {
      console.error("Errore nel recupero delle top news", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTopNews();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <NewsSection title="Top News" articles={topNews} />;
}
