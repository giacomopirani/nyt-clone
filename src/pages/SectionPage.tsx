import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNewsBySection } from "../api";
import LoadingSpinner from "../components/LoadingSpinner";
import NewsCard from "../components/NewsCard";
import { NewsArticle } from "../types/index-type";

export default function SectionPage() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <main className="flex items-center justify-center min-h-screen bg-slate-50">
      <section className="w-full max-w-7xl p-4 bg-white shadow-lg rounded-lg">
        <h3 className="mb-5 text-xl">
          Section: <strong>{slug}</strong>
        </h3>

        {slug && <NewsList slug={slug} />}
      </section>
    </main>
  );
}

function NewsList(props: { slug: string }) {
  const [topNews, setTopNews] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchNews = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data } = await getNewsBySection(props.slug);
      setTopNews(data.results);
    } catch (error) {
      console.error("Error fetching news", error);
    } finally {
      setIsLoading(false);
    }
  }, [props.slug]);

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
          <div className="grid grid-cols-2 gap-4">
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
