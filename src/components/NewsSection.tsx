import React from "react";

export type NewsArticle = {
  multimedia: [{ url: string }];
  title: string;
  abstract: string;
  url: string;
};

interface NewsSectionProps {
  title: string;
  articles: NewsArticle[];
}

const NewsSection: React.FC<NewsSectionProps> = ({ title, articles }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
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
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-800"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
