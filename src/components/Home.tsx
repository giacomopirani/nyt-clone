import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [topNews, setTopNews] = useState<any[]>([]);
  const [latestNews, setLatestNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const topNewsResponse = await axios.get(
          "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=rwgaROyZJvGpZslsTzVD87nUIBkvLQld"
        );
        const latestNewsResponse = await axios.get(
          "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=rwgaROyZJvGpZslsTzVD87nUIBkvLQld"
        );
        setTopNews(topNewsResponse.data.results);
        setLatestNews(latestNewsResponse.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Errore nel recupero delle notizie", error);
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const rows = [];
  const topNewsPerRow = 2;
  const latestNewsPerRow = 1;
  const maxRows = Math.min(
    Math.ceil(topNews.length / topNewsPerRow),
    Math.ceil(latestNews.length / latestNewsPerRow)
  );

  for (let i = 0; i < maxRows; i++) {
    const topNewsSlice = topNews.slice(
      i * topNewsPerRow,
      (i + 1) * topNewsPerRow
    );
    const latestNewsSlice = latestNews.slice(
      i * latestNewsPerRow,
      (i + 1) * latestNewsPerRow
    );

    rows.push({ topNews: topNewsSlice, latestNews: latestNewsSlice });
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-white">
      {" "}
      {/* Modificato a bg-white */}
      <section className="w-full max-w-5xl p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rows.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {row.topNews.map((article, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-lg overflow-hidden mb-6"
                  >
                    {article.multimedia && article.multimedia[0] && (
                      <img
                        src={article.multimedia[0].url}
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2 font-serif">
                        {article.title}
                      </h3>
                      <p className="text-gray-700 font-serif">
                        {article.abstract || "No abstract available"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-span-1">
                {row.latestNews.map((article, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 shadow-lg rounded-lg p-4 mb-6 max-w-lg"
                  >
                    <h3 className="text-lg font-bold mb-2 font-mono">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 font-mono">
                      {article.abstract || "No abstract available"}
                    </p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-500 p-2 hover:text-indigo-800"
                    >
                      Read more
                    </a>
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  );
}
