import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getLatestNews, getTopNews } from "../api";
import LoadingSpinner from "../components/LoadingSpinner";
import NewsCard from "../components/NewsCard";
import { NewsArticle } from "../types";

export default function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-slate-50">
      <section className="w-full max-w-7xl p-4 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <TopNews />
          </div>
          <div>
            <LatestNews />
          </div>
        </div>
      </section>
    </main>
  );
}

export function TopNews() {
  const [topNews, setTopNews] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchNews = async () => {
    setIsLoading(true);

    try {
      const { data } = await getTopNews();
      setTopNews(data.results);
    } catch (error) {
      console.error("Error fetching news", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-left">Top News</h2>
      <div className="grid grid-cols-1 gap-6">
        {topNews.length === 0 ? (
          <p>No top news found.</p>
        ) : (
          topNews.map((news, index) => (
            <motion.div
              key={index}
              className="shadow-md rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <NewsCard article={news} />
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}

export function LatestNews() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchNews = async () => {
    setIsLoading(true);

    try {
      const { data } = await getLatestNews();
      setNews(data.results);
    } catch (error) {
      console.error("Error fetching news", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-left">Latest News</h2>
      <div className="grid grid-cols-1 gap-6">
        {news.length === 0 ? (
          <p>No Latest news found.</p>
        ) : (
          news.map((news, index) => (
            <motion.div
              key={index}
              className="shadow-md rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <NewsCard article={news} />
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
