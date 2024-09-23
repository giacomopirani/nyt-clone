import React, { useEffect, useState } from "react";
import { getLatestNewsResponse, getTopNewsResponse } from "../api/api";

export type News = {
  multimedia: [{ url: string }];
  title: string;
  abstract: string;
  url: string;
};
export default function Home() {
  const [topNews, setTopNews] = useState<News[]>([]);
  const [latestNews, setLatestNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetchNews = async () => {
    try {
      const topNewsResponse = await getTopNewsResponse();
      console.log(topNewsResponse);

      const latestNewsResponse = await getLatestNewsResponse();
      setTopNews(topNewsResponse.results);
      setLatestNews(latestNewsResponse.results);
      setIsLoading(false);
    } catch (error) {
      console.error("Errore nel recupero delle notizie", error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);

  if (isLoading) {
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

  console.log("qui");

  return (
    <main className="flex items-center justify-center min-h-screen bg-white">
      {" "}
      {/* Modificato a bg-white */}
      <section className="w-full max-w-5xl p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rows.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {row.topNews.map((news, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-lg overflow-hidden mb-6"
                  >
                    {news.multimedia && news.multimedia[0] && (
                      <img
                        src={news.multimedia[0].url}
                        alt={news.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2 font-serif">
                        {news.title}
                      </h3>
                      <p className="text-gray-700 font-serif">
                        {news.abstract || "No abstract available"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-span-1">
                {row.latestNews.map((article, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 shadow-lg  p-4 mb-6 max-w-xl h-72"
                  >
                    <h3 className="text-lg mb-2 font-semibold">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 font-thin">
                      {article.abstract || "No abstract available"}
                    </p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 text-center hover:text-indigo-800"
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
