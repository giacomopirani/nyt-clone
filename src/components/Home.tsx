import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getLatestNewsResponse, getTopNewsResponse } from "../api/api";
import LoadingSpinner from "./LoadingSpinner";
import NewsCard from "./NewsCard";

export type News = {
  multimedia: [{ url: string }];
  title: string;
  abstract: string;
  url: string;
};

interface HomeProps {
  searchTerm: string;
}

export default function Home({ searchTerm }: { searchTerm: string }) {
  const [topNews, setTopNews] = useState<News[]>([]);
  const [latestNews, setLatestNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredTopNews, setFilteredTopNews] = useState<News[]>([]);
  const [filteredLatestNews, setFilteredLatestNews] = useState<News[]>([]);

  useEffect(() => {
    setFilteredTopNews(
      topNews.filter((news) =>
        news.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredLatestNews(
      latestNews.filter((news) =>
        news.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, topNews, latestNews]);

  const fetchNews = async () => {
    try {
      const topNewsResponse = await getTopNewsResponse();
      const latestNewsResponse = await getLatestNewsResponse();
      setTopNews(topNewsResponse.results);
      setLatestNews(latestNewsResponse.results);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching news", error);
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
    <main className="flex items-center justify-center min-h-screen bg-slate-50">
      <section className="w-full max-w-7xl p-4 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-left">Top News</h2>
            <div className="grid grid-cols-1 gap-6">
              {filteredTopNews.length === 0 ? (
                <p>No news found.</p>
              ) : (
                filteredTopNews.map((news, index) => (
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

          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4 text-left">Latest News</h2>
            <div className="grid grid-cols-1 gap-6">
              {filteredLatestNews.length === 0 ? (
                <p>No news found.</p>
              ) : (
                filteredLatestNews.map((article, index) => (
                  <motion.div
                    key={index}
                    className="shadow-md rounded-lg overflow-hidden"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <NewsCard article={article} />
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
