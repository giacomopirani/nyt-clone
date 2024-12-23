import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchNews } from "../api";
import transformArticle from "../api/transform";
import LoadingSpinner from "../components/LoadingSpinner";
import NewsCard from "../components/NewsCard";
import { NewsArticle } from "../types/index-type";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  return (
    <main className="flex items-center justify-center min-h-screen bg-slate-50">
      <section className="w-full max-w-7xl p-4 bg-white shadow-lg rounded-lg">
        <h3 className="mb-5 text-xl">
          Search results for: <strong> {query}</strong>
        </h3>

        {query && <NewsList query={query} />}
      </section>
    </main>
  );
}

function NewsList(props: { query: string }) {
  const [topNews, setTopNews] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchNews = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data } = await searchNews(props.query);
      setTopNews(data.response.docs.map(transformArticle));
    } catch (error) {
      console.error("Error fetching news", error);
    } finally {
      setIsLoading(false);
    }
  }, [props.query]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-6">
        {topNews.length === 0 ? (
          <p>No top news found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topNews.map((news, index) => (
              <motion.div
                key={index}
                className="shadow-md rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <NewsCard article={news} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
